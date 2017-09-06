const appendNode = require('./helpers/append_node.js').appendNode
const ignitePythonCode = require('./ignition/ignite_python_code.js').ignitePythonCode

module.exports = class Leichter {
  constructor(options = {}) {
    const { lang, element } = options
    this.lang = lang
    this.element = document.getElementById(element)
  }

  /* Using instance object to ignite the syntax highlighting */
  ignite() {
    const codeString = this.element.innerText

    switch(this.lang) {
      case 'python': ignitePythonCode(this.element); break;
      default: console.warn(`${this.lang} lang currently is unsupported!`)
    }
  }

  /* Directly ignite the syntax highlighting using class method */
  static ignite(options = {}) {
  }
}