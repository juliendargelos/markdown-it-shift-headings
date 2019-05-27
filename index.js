module.exports = ({ core: { ruler } }, { offset = 1 } = {}) => {
  ruler.push('shift_headings', ({ tokens }) => tokens.forEach(token => {
    if (token.type !== 'heading_open' && token.type !== 'heading_close') return
    const level = Math.min(6, parseFloat(token.tag.substring(1), 10) + offset)
    token.tag = 'h' + level
    token.markup = '#'.repeat(level)
  }))
}
