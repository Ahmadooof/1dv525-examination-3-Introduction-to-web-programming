import MemoryGame from './memoryGame.js'
import window from './window.js'

const memoryGameButton = document.querySelector('#memory')
let navWindow
let windowDiv

memoryGameButton.addEventListener('click', function () {
  let memoryGame = new MemoryGame(4, 4, 'memoryContainer')
  let myWindow = new window('.windowContainer')
  myWindow.div.appendChild(memoryGame.container)
  navWindow = document.querySelector('.navWindow')
  windowDiv = document.querySelector('.window')
  moveWindow(windowDiv)
})

let mousePosition
let coordinates = [0, 0]
let isDown = false

function moveWindow (windowDiv) {
  navWindow.addEventListener('mousedown', function (event) {
    isDown = true
    coordinates = [
      navWindow.offsetLeft - event.clientX - 100,
      navWindow.offsetTop - event.clientY - 10
    ]
  }, true)

  navWindow.addEventListener('mouseup', function () {
    isDown = false
  }, true)

  navWindow.addEventListener('mousemove', function (event) {
    if (isDown) {
      console.log(event.clientX)
      mousePosition = {
        x: event.clientX,
        y: event.clientY
      }
      windowDiv.style.marginLeft = (mousePosition.x + coordinates[0]) + 'px'
      windowDiv.style.marginTop = (mousePosition.y + coordinates[1]) + 'px'
      windowDiv.style.marginTop = (mousePosition.y + coordinates[1]) + 'px'
    }
  }, true)

}