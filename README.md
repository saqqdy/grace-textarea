<div style="text-align: center;" align="center">

# grace-textarea

A composition api for textarea

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

### **[Documentation](https://www.saqqdy.com/grace-textarea)** • **[Change Log](./CHANGELOG.md)**

</div>

## Installing

```bash
# use pnpm
$ pnpm install grace-textarea

# use npm
$ npm install grace-textarea --save

# use yarn
$ yarn add grace-textarea
```

## Usage

1. Simple use:

```ts
import Textarea from 'grace-textarea'

const element = document.getElementById('text-area')
const textarea = new Textarea(element)

textarea.insert('I am insert text')
textarea.moveToEnd() // move cursors to end
```

2. Using in vue3.x:

```vue
<template>
  <textarea name="textarea" ref="textareaRef"></textarea>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GraceTextarea from 'grace-textarea'

const textareaRef = ref(null)
const textarea = new GraceTextarea(textareaRef)

onMounted(() => {
  textarea.insert('I am insert text')
  textarea.moveToEnd() // move cursors to end
})

defineExpose({
  textareaRef
})
</script>
```

3. Using in vue2.x:

```vue
<template>
  <textarea name="textarea" ref="textareaRef"></textarea>
</template>

<script>
export default {
  mounted() {
    const textarea = new GraceTextarea(this.$refs.textareaRef)

    textarea.insert('I am insert text')
    textarea.moveToEnd() // move cursors to end
  }
}
</script>
```

4. Using unpkg CDN:

```html
<script src="https://unpkg.com/grace-textarea@1.0.0/dist/index.global.prod.js"></script>
<script>
  const textarea = new GraceTextarea(document.getElementById('id'))
  // ...
</script>
```

## Support & Issues

Please open an issue [here](https://github.com/saqqdy/grace-textarea/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/grace-textarea.svg?style=flat-square
[npm-url]: https://npmjs.org/package/grace-textarea
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/grace-textarea/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/grace-textarea&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/grace-textarea.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/grace-textarea?branch=master
[download-image]: https://img.shields.io/npm/dm/grace-textarea.svg?style=flat-square
[download-url]: https://npmjs.org/package/grace-textarea
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_grace-textarea
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_grace-textarea
