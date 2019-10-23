export default class chat {

  /**
   *
   * @param container
   * @param myWindow
   */
  constructor (container, myWindow) {
    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll('.chatContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    this.container.appendChild(this.div)

    this.showName = this.div.childNodes[3]
    this.messageDiv = document.createElement('div');
    /**
     * if true => show username in window, change username process
     * else add new username
     */
    if (this.isUserNameExist()) {
      this.userName = localStorage.getItem('username')
      this.showName.innerText = 'Me ' + '( ' + this.userName + ' )'
      this.changeNameProcess(myWindow)
    } else {
      this.showName.style.display = 'none'
      this.addUserName(myWindow)
    }
    let configJS = {
      type: "message",
      data : "The message text is sent using the data property",
      username: "tester",
    }
    let configJSON = JSON.stringify(configJS);

    this.socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/');

    // message received - show the message in div#messages
    this.socket.onmessage = function(event) {
      this.message = event.data
      this.messageDiv.textContent = this.message

      // document.getElementById('messages').prepend(messageElem);
    }
  }

  /**
   * adding "add userName" button, adding textbox to set username
   * adding "ok" button to take this name and store it in local storage.
   * @param myWindow
   */
  addUserName (myWindow) {
    let addUserName = document.createElement('button')
    addUserName.innerText = 'Add Username'
    addUserName.className = 'changeNameButton'
    addUserName.style.backgroundColor = '#4ca76c'
    addUserName.style.padding = '11px 53px'
    myWindow.div.firstElementChild.appendChild(addUserName)
    addUserName.addEventListener('click', (event) => {
      addUserName.remove()
      let textBox = document.createElement('input')
      textBox.placeholder = 'Enter UserName'
      textBox.className = 'UserNameTextBox'
      myWindow.div.firstElementChild.appendChild(textBox)
      let buttonOk = document.createElement('button')
      buttonOk.innerText = 'OK'
      buttonOk.className = 'buttonOk'
      myWindow.div.firstElementChild.appendChild(buttonOk)
      buttonOk.addEventListener('click', () => {
        this.nameValue = document.querySelector('.UserNameTextBox').value
        localStorage.setItem('username', this.nameValue)
        this.showName.style.display = 'block'
        this.showName.innerText = 'Me ' + '( ' + this.nameValue + ' )'
        textBox.remove()
        buttonOk.remove()
        this.changeNameProcess(myWindow)
      })
    })
  }

  /**
   * adding "Change UserName" button, adding textbox to set new username
   * adding "ok" button to take this name and store it in local storage.
   * @param myWindow
   */
  changeNameProcess (myWindow) {
    let changeNameButton = document.createElement('button')
    changeNameButton.innerText = 'Change Username'
    changeNameButton.className = 'changeNameButton'
    myWindow.div.firstElementChild.appendChild(changeNameButton)
    changeNameButton.addEventListener('click', (event) => {
      changeNameButton.remove()
      let textBox = document.createElement('input')
      textBox.placeholder = 'Enter UserName'
      textBox.className = 'UserNameTextBox'
      myWindow.div.firstElementChild.appendChild(textBox)
      let buttonOk = document.createElement('button')
      buttonOk.innerText = 'OK'
      buttonOk.className = 'buttonOk'
      myWindow.div.firstElementChild.appendChild(buttonOk)
      buttonOk.addEventListener('click', () => {
        this.nameValue = document.querySelector('.UserNameTextBox').value
        localStorage.setItem('username', this.nameValue)
        this.showName.innerText = 'Me ' + '( ' + this.nameValue + ' )'
        textBox.remove()
        buttonOk.remove()
        this.changeNameProcess(myWindow)
      })
    })
  }

  /**
   * return true if there is a user name in local storage
   * @returns {boolean}
   */
  isUserNameExist () {
    this.userName = localStorage.getItem('username')
    if (this.userName === null) {
      return false
    } else {
      return true
    }
  }

}