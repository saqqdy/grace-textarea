import { inBrowser } from 'js-cool'
import { isRef } from '@vue/reactivity'
import type { Ref } from '@vue/reactivity'

class Textarea {
	el: HTMLTextAreaElement | Ref<HTMLTextAreaElement> | null = null

	constructor(el: HTMLTextAreaElement | Ref<HTMLTextAreaElement>) {
		if (!inBrowser) return
		if (!el) {
			console.error('element is required')
			return
		}

		this.el = el
	}

	/**
	 * insert text
	 *
	 * @param data - the content
	 */
	public insert(data: string): void {
		if (!this.el) {
			console.error('the element is null')
			return
		}
		const el = isRef(this.el) ? this.el.value : this.el

		if ((document as any).selection) {
			// IE
			const sel = (document as any).selection.createRange()
			sel.text = data
		} else if (typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number') {
			const startPos = el.selectionStart
			const endPos = el.selectionEnd
			const tmpStr = el.value
			let curPos = startPos
			el.value =
				tmpStr.substring(0, startPos) + data + tmpStr.substring(endPos, tmpStr.length)
			curPos += data.length
			setTimeout(() => {
				el.selectionStart = el.selectionEnd = curPos
			}, 0)
		} else {
			el.value += data
		}
	}

	/**
	 * move cursors to end
	 *
	 * @param text - the content
	 */
	public moveToEnd(): void {
		if (!this.el) {
			console.error('the element is null')
			return
		}
		const el = isRef(this.el) ? this.el.value : this.el

		el.focus()
		const len = el.value.length
		if ((document as any).selection) {
			const sel = (el as any).createTextRange()
			sel.moveStart('character', len)
			sel.collapse()
			sel.select()
		} else if (typeof el.selectionStart == 'number' && typeof el.selectionEnd == 'number') {
			el.selectionStart = el.selectionEnd = len
		}
	}
}

export { Textarea as default }
