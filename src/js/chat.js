export default class chat {

  constructor (container) {
    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll('.chatContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    console.log(this.div)
    this.container.appendChild(this.div)
  }
}