export default class window {

  constructor (container) {
    this.container = document.querySelector(container)
    console.log(this.container)
    this.windowDiv = document.querySelectorAll('.windowContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.windowDiv, false)
    console.log(this.div)
    this.container.appendChild(this.div)
  }
}