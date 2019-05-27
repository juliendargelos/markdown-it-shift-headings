# markdown-it-shift-headings

> markdown-it plugin to shift headings by given offset.

## Install

With yarn:

```bash
yarn add markdown-it-shift-headings
```

With npm:

```bash
npm install markdown-it-shift-headings --save
```

## Usage

```javascript
import MarkdownIt from 'markdown-it'
import shiftHeadings from 'markdown-it-shift-headings'

const content = `
# Lorem
## Ipsum
### Dolor
#### Sit
##### Amet
###### Consectetur
`

new MarkdownIt()
    .use(shiftHeadings) // Using default offset: 1
    .render(content)

// <h2>Lorem</h2>
// <h3>Ipsum</h3>
// <h4>Dolor</h4>
// <h5>Sit</h5>
// <h6>Amet</h6>
// <h6>Consectetur</h6>

new MarkdownIt()
    .use(shiftHeadings, { offset: 2 }) // Using custom offset: 2
    .render(content)

// <h3>Lorem</h3>
// <h4>Ipsum</h4>
// <h5>Dolor</h5>
// <h6>Sit</h6>
// <h6>Amet</h6>
// <h6>Consectetur</h6>
````
