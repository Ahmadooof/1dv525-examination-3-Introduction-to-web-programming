export default class chat {

  constructor (container,window) {
    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll('.chatContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    console.log(this.div)
    this.container.appendChild(this.div)

    if(this.isUserNameExist())
    {

    }
  }

  isUserNameExist () {
    this.userName = localStorage.getItem('username')
    if (this.userName === null) {
      return false
    } else {
      return true
    }
  }

}