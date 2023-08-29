
import image from '../image/memoryGame/0.png'
import image1 from '../image/memoryGame/1.png'
import image2 from '../image/memoryGame/2.png'
import image3 from '../image/memoryGame/3.png'
import image4 from '../image/memoryGame/4.png'
import image5 from '../image/memoryGame/5.png'
import image6 from '../image/memoryGame/6.png'
import image7 from '../image/memoryGame/7.png'
import image8 from '../image/memoryGame/8.png'


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
    const img = new Image();
    img.src = image;
    let tries = 0
    this.tiles.forEach(function (tile, index) {
      const a = document.importNode(img, true)
      div.appendChild(a)
      
      // div.appendChild(a)
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
        switch (tile) {
          case 1:
            img.src = image1
            break;
          case 2:
            img.src = image2
            break
          case 3:
            img.src = image3
            break;
          case 4:
            img.src = image4
            break;
          case 5:
            img.src = image5
            break
          case 6:
            img.src = image6
            break;
          case 7:
            img.src = image7
            break;
          case 8:
            img.src = image8
            break;
        }

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
              turn1.src = image
              turn2.src = image
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
