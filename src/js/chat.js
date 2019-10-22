export default class chat {

  constructor (container,window) {
    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll('.chatContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    this.container.appendChild(this.div)

    if(this.isUserNameExist())
    {
      console.log(window.div.firstElementChild)
      let changeNameButton = document.createElement('button')
      changeNameButton.innerText = "Change Username"
      changeNameButton.className = 'changeNameButton'
      window.div.firstElementChild.appendChild(changeNameButton)
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