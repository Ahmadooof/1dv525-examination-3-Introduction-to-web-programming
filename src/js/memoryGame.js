export default class memoryGame {
  constructor (rows, columns, container, myWindow) {
    this.container = document.getElementById(container)
    this.memoryDiv = document.querySelectorAll('#memoryContainer template')[0].content.firstElementChild // this is memory div
    this.div = document.importNode(this.memoryDiv, false)
    this.tiles = this.shuffleArray(rows, columns)
    this.createImages(rows, columns, this.memoryDiv, this.div)
    this.container.appendChild(this.div)

    const divRepresentWindow = document.createElement('div')
    divRepresentWindow.textContent = 'MemoryGame'
    divRepresentWindow.className = 'representWindowMemory'
    myWindow.div.firstElementChild.appendChild(divRepresentWindow)
  }

  /**
   * creating the images for each tile and adding event listener for each
   * @param rows
   * @param columns
   * @param template
   * @param div
   */
  createImages (rows, columns, template, div) {
    let turn1
    let turn2
    let lastTile
    let pairs = 0
    let tries = 0
    this.tiles.forEach(function (tile, index) {
      const a = document.importNode(template.firstElementChild, true)
      div.appendChild(a)
      a.addEventListener('click', function (event) {
        const img = event.target.nodeName === 'IMG' ? event.target : event.target.firstElementChild
        turnTile(tile, index, img, div)
      })

      /**
       * turn the tile for each click and get the image of that tile
       * @param tile
       * @param index
       * @param img
       * @param myWindow
       */
      function turnTile (tile, index, img, myWindow) {
        if (turn2) {
          return
        }
        img.src = 'image/memoryGame/' + tile + '.png'
        if (!turn1) {
          turn1 = img
          lastTile = tile
        } else {
          if (img === turn1) {
            return
          }
          tries += 1
          turn2 = img
          if (tile === lastTile) {
            // pairs
            pairs += 1
            console.log(pairs)
            if (pairs === (rows * columns) / 2) {
              div.textContent = 'Won on ' + tries + ' tries'
            }
            window.setTimeout(function () {
              turn1.parentNode.classList.add('removed')
              turn2.parentNode.classList.add('removed')
              turn1 = null
              turn2 = null
            }, 400)
          } else {
            window.setTimeout(function () {
              turn1.src = 'image/memoryGame/0.png'
              turn2.src = 'image/memoryGame/0.png'
              turn1 = null
              turn2 = null
            }, 500)
          }
        }
      }

      // creating new line after each row (4 images)
      if ((index + 1) % columns === 0) {
        div.appendChild(document.createElement('br'))
      }
    })
  }

  /**
   * make a shuffle of images
   * @param rows
   * @param columns
   * @returns {[]}
   */
  shuffleArray (rows, columns) {
    let i
    const arrayShuffle = []

    for (i = 1; i <= (rows * columns) / 2; i++) {
      arrayShuffle.push(i)
      arrayShuffle.push(i)
    }
    for (let j = arrayShuffle.length - 1; j > 0; j--) {
      const number = Math.floor(Math.random() * (j + 1))
      const temp = arrayShuffle[j]
      arrayShuffle[j] = arrayShuffle[number]
      arrayShuffle[number] = temp
    }
    return arrayShuffle
  }
}
