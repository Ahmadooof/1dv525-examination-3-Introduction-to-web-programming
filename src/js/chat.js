export default class chat {

  constructor (container,window) {
    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll('.chatContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    this.container.appendChild(this.div)

    /**
     * if true => adding "Change UserName" button, adding textbox to set new username
     * adding ok to take this name and store it in local storage.
     */
    if(this.isUserNameExist())
    {
      let changeNameButton = document.createElement('button')
      changeNameButton.innerText = "Change Username"
      changeNameButton.className = 'changeNameButton'
      window.div.firstElementChild.appendChild(changeNameButton)
      changeNameButton.addEventListener('click', (event) => {
        changeNameButton.remove()
        let textBox = document.createElement('input')
        textBox.placeholder = "Enter UserName"
        textBox.className = "UserNameTextBox"
        window.div.firstElementChild.appendChild(textBox)
        let buttonOk = document.createElement('button')
        buttonOk.innerText = "OK"
        buttonOk.className = "buttonOk"
        window.div.firstElementChild.appendChild(buttonOk)
        buttonOk.addEventListener('click', () => {
          let nameValue = document.querySelector('.UserNameTextBox').value
          localStorage.setItem('username', nameValue)
          textBox.remove()
          buttonOk.remove()
        })
    })
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