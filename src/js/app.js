import MemoryGame from './memoryGame.js'
import window from './window.js'
import chat from './chat.js'

const memoryGameButton = document.querySelector('#memory')
const chatButton = document.querySelector('#chat')


memoryGameButton.addEventListener('click', function () {
  let memoryGame = new MemoryGame(4, 4, 'memoryContainer')
  let myWindow = new window('.windowContainer')
  myWindow.div.appendChild(memoryGame.div)
})

chatButton.addEventListener('click', function () {
  let myChat = new chat('chatContainer')
  let myWindow = new window('.windowContainer')
   // myWindow.div.appendChild(myChat)
})
