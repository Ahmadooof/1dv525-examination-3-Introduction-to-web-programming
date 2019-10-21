import MemoryGame from './memoryGame.js'

const memoryGame = new MemoryGame(4, 4, 'memoryContainer')

const window = document.querySelector('.window')
const memoryGameButton = document.querySelector('#memory')
const navWindow = document.querySelector('.navWindow')

memoryGameButton.addEventListener('click', function () {
  window.style.display = 'block'
})

let mousePosition
let coordinates = [0, 0]
let isDown = false

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
    window.style.marginLeft = (mousePosition.x + coordinates[0]) + 'px'
    window.style.marginTop = (mousePosition.y + coordinates[1]) + 'px'
  }

}, true)

