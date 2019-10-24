import MemoryGame from './memoryGame.js'
import window from './window.js'
import chat from './chat.js'
import sokobanGame from './sokobanGame.js'

const memoryGameButton = document.querySelector('#memory')
const chatButton = document.querySelector('#chat')
const sokobanGameButton = document.querySelector('#sokoban')

memoryGameButton.addEventListener('click', function () {
  let memoryGame = new MemoryGame(4, 4, 'memoryContainer')
  let myWindow = new window('.windowContainer')
  myWindow.div.appendChild(memoryGame.div)
})

chatButton.addEventListener('click', function () {
  let myWindow = new window('.windowContainer')
  let myChat = new chat('.chatContainer', myWindow)
  myWindow.div.appendChild(myChat.div)
})

sokobanGameButton.addEventListener('click', function () {
  let myWindow = new window('.windowContainer')
  let sokobanObj = new sokobanGame('.skoboanContainer', myWindow)
   // myWindow.div.appendChild(sokobanObj.game)
})
