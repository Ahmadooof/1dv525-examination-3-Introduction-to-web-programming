export default class chat {
  /**
   *
   * @param container
   * @param myWindow
   */
  constructor (container, myWindow) {
    /**
     * initializations variables
     * @type {any}
     */
    this.container = document.querySelector(container)
    this.chatDiv = document.querySelectorAll('.chatContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.chatDiv, true)
    this.container.appendChild(this.div)

    // this.socket = new WebSocket('ws://vhost3.lnu.se:20080/socket/')

    this.myName = localStorage.getItem('username')

    this.showName = this.div.childNodes[3]
    this.showMessageDiv = this.div.childNodes[1]
    this.textAreaDiv = this.div.childNodes[5]

    const divRepresentWindow = document.createElement('div')
    divRepresentWindow.textContent = 'Chat'
    divRepresentWindow.className = 'representWindow'
    myWindow.div.firstElementChild.appendChild(divRepresentWindow)

    // let configJSON = JSON.stringify(configJS)

    /**
     * if true => show username in window, change username process
     * else add new username
     */
    if (this.isUserNameExist()) {
      this.showName.innerText = 'Me ' + '( ' + this.myName + ' )'
      this.changeNameProcess(myWindow)
    } else {
      this.showName.style.display = 'none'
      this.addUserName(myWindow)
    }

    /**
     * Receive messages from server
     * @param event
     */
    // this.socket.onmessage = (event) => {
    //   this.onEachMessageProcess(event)
    // }

    /**
     * Send messages to the server
     */
    this.textAreaDiv.addEventListener('keypress', (event) => {
      this.myName = localStorage.getItem('username')
      if (event.keyCode === 13) {
        this.messageJsToServer = {
          type: 'message',
          data: event.target.value,
          username: this.myName,
          key: 'eDBE76deU7L0H9mEBgxUKVR0VCnq0XBd'
        }
        this.sendJsonMessage = JSON.stringify(this.messageJsToServer)
        // this.socket.send(this.sendJsonMessage)
      }
    })
  }

  /**
   * Receive messages from server
   * @param event
   */
  onEachMessageProcess (event) {
    this.messageDiv = document.createElement('div')
    this.message = event.data
    this.message = JSON.parse(this.message)
    this.strangerUserName = this.message.username
    this.data = this.message.data
    this.messageDiv.innerHTML = this.strangerUserName + ':' + '<br>' + this.data
    this.messageDiv.className = 'container'
    this.showMessageDiv.appendChild(this.messageDiv)
  }

  /**
   * adding "add userName" button, adding textbox to set username
   * adding "ok" button to take this name and store it in local storage.
   * @param myWindow
   */
  addUserName (myWindow) {
    const addUserName = document.createElement('button')
    addUserName.innerText = 'Add Username'
    addUserName.className = 'changeNameButton'
    addUserName.style.backgroundColor = '#4ca76c'
    addUserName.style.padding = '11px 53px'
    myWindow.div.firstElementChild.appendChild(addUserName)
    addUserName.addEventListener('click', (event) => {
      addUserName.remove()
      const textBox = document.createElement('input')
      textBox.placeholder = 'Enter UserName'
      textBox.className = 'UserNameTextBox'
      myWindow.div.firstElementChild.appendChild(textBox)
      const buttonOk = document.createElement('button')
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

    addUserName.click()
  }

  /**
   * adding "Change UserName" button, adding textbox to set new username
   * adding "ok" button to take this name and store it in local storage.
   * @param myWindow
   */
  changeNameProcess (myWindow) {
    const changeNameButton = document.createElement('button')
    changeNameButton.innerText = 'Change Username'
    changeNameButton.className = 'changeNameButton'
    myWindow.div.firstElementChild.appendChild(changeNameButton)
    changeNameButton.addEventListener('click', (event) => {
      changeNameButton.remove()
      const textBox = document.createElement('input')
      textBox.placeholder = 'Enter UserName'
      textBox.className = 'UserNameTextBox'
      myWindow.div.firstElementChild.appendChild(textBox)
      const buttonOk = document.createElement('button')
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
    this.myName = localStorage.getItem('username')
    console.log(this.myName)
    if (this.myName === null || this.myName === '') {
      return false
    } else {
      return true
    }
  }
}
