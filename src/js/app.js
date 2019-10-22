import MemoryGame from './memoryGame.js'
import window from './window.js'

const memoryGameButton = document.querySelector('#memory')

let navWindow
let windowDiv
let countWindows = 0
let mousePosition
let coordinates = [0, 0]
let isDown = false

memoryGameButton.addEventListener('click', function () {
  let memoryGame = new MemoryGame(4, 4, 'memoryContainer')
  let myWindow = new window('.windowContainer')
  myWindow.div.appendChild(memoryGame.div)
  navWindow = document.querySelectorAll('.navWindow')[countWindows]
  windowDiv = document.querySelectorAll('.window')[countWindows]
  countWindows++
})

document.body.addEventListener('mousedown', event => {
  if (event.target !== navWindow) {
    return
  }
  isDown = true
  console.log('X'+event.target.offsetLeft)
  console.log('Y'+event.target.offsetTop)
  console.log('X'+event.clientX)
  console.log('Y'+event.clientY)

  coordinates = [
    event.target.offsetLeft - event.clientX ,
    event.target.offsetTop - event.clientY
  ]
}, true)

document.body.addEventListener('mouseup', event => {
  if (event.target !== navWindow) {
    return
  }
  isDown = false
}, true)

document.body.addEventListener('mousemove', event => {
  if (event.target !== navWindow) {
    return
  }
  if (isDown) {
    mousePosition = {
      x: event.clientX,
      y: event.clientY
    }
    windowDiv.style.marginLeft = (mousePosition.x + coordinates[0]) + 'px'
    windowDiv.style.marginTop = (mousePosition.y + coordinates[1]) + 'px'
  }
}, true)
