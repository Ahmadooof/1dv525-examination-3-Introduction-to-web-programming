export default class memoryGame {

  constructor (rows, columns, container) {
    this.container = document.getElementById(container)
    this.template = document.querySelectorAll('#memoryContainer template')[0]

    this.createImages(rows, columns)
    this.tiles = this.shuffleArray(rows, columns)

  }

  createImages (rows, columns) {
    for (let i = 0; i < rows * columns; i++) {

      let img = document.importNode(this.template.content.firstElementChild, true)

      this.container.appendChild(img)

      // creating new line after each row (4 images)
      if ((i + 1) % columns === 0) {
        this.container.appendChild(document.createElement('br'))
      }
    }
  }

  shuffleArray (rows, columns) {
    let i
    let arrayShuffle = []

    for (i = 1; i <= (rows * columns) / 2; i++) {
      arrayShuffle.push(i)
      arrayShuffle.push(i)
    }

    for (let j = arrayShuffle.length - 1; j > 0; j--) {
      let number = Math.floor(Math.random() * (j + 1))
      let temp = arrayShuffle[j]
      arrayShuffle[j] = arrayShuffle[number]
      arrayShuffle[number] = temp
    }
    return arrayShuffle
  }

}