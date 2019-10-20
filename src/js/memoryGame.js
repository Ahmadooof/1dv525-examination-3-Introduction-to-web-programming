export default class memoryGame {

  constructor (rows, columns, container) {
    this.container = document.getElementById(container)
    this.template = document.querySelectorAll('#memoryContainer template')[0].content.firstElementChild
    this.tiles = this.shuffleArray(rows, columns)
    this.createImages(rows, columns, this.template, this.container)
  }

  createImages (rows, columns, template, container) {

    this.tiles.forEach(function (tile, index) {
      const img = document.importNode(template, true)
      container.appendChild(img)

      img.addEventListener('click', function () {
        turnTile(tile, index, img)
      })

      function turnTile (tile, index, img) {
        img.src = 'image/memoryGame/' + tile + '.png'
      }

      // creating new line after each row (4 images)
      if ((index + 1) % columns === 0) {
        container.appendChild(document.createElement('br'))
      }
    })
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