export default class window {

  constructor (container) {
    this.container = document.querySelector(container)
    this.windowDiv = document.querySelectorAll('.windowContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.windowDiv, true)
    this.container.appendChild(this.div)
  }

}