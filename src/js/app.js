import MemoryGame from './memoryGame.js'
import window from './window.js'

const memoryGameButton = document.querySelector('#memory')

let navWindow
let windowDiv

let test = document.querySelectorAll('.windowContainer template')[0].content.firstElementChild
let nav = test.firstElementChild

memoryGameButton.addEventListener('click', function () {
  let memoryGame = new MemoryGame(4, 4, 'memoryContainer')
  let myWindow = new window('.windowContainer')
  myWindow.div.appendChild(memoryGame.div)
})
