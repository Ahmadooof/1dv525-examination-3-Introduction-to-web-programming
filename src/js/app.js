import MemoryGame from './memoryGame.js'
import window from './window.js'

const memoryGameButton = document.querySelector('#memory')

let navWindow
let windowDiv
let countWindows = 0


memoryGameButton.addEventListener('click', function () {
  let memoryGame = new MemoryGame(4, 4, 'memoryContainer')
  let myWindow = new window('.windowContainer')
  myWindow.div.appendChild(memoryGame.div)
  navWindow = document.querySelectorAll('.navWindow')[countWindows]
  windowDiv = document.querySelectorAll('.window')[countWindows]
  countWindows++
})
let mousePosition
let coordinates = [0, 0]
let isDown = false
document.body.addEventListener('mousedown', event => {
  if (event.target !== navWindow) {
    return
  }
  console.log(navWindow.offsetLeft)
  isDown = true
  coordinates = [
    windowDiv.offsetLeft - event.clientX - 150 ,
    windowDiv.offsetTop - event.clientY - 40
  ]
  console.log(coordinates[0])
}, true)

document.body.addEventListener('mouseup', event => {
  if (event.target !== navWindow) {
    return
  }
  mousePosition = {}
  coordinates = [0, 0]
  isDown = false
}, true)

document.body.addEventListener('mousemove', event => {
  if (event.target !== navWindow) {
    return
  }
  if (isDown) {
    mousePosition = {
      x : event.clientX,
      y : event.clientY
    }
    windowDiv.style.left = (mousePosition.x + coordinates[0]) + 'px';
    windowDiv.style.top  = (mousePosition.y + coordinates[1]) + 'px';
  }
}, true)
