import MemoryGame from './memoryGame.js'
import windowObject from './window.js'

const memoryGame = new MemoryGame(4, 4, 'memoryContainer')

const window = document.querySelector('#window')
const memoryGameButton = document.querySelector("#memory")


memoryGame.addEventListener('click', function () {

})