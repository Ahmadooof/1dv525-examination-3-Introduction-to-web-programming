export default class memoryGame {

  constructor (rows, columns, container) {
    this.container = document.getElementById(container)
    this.template = document.querySelectorAll('#memoryContainer template')[0].content.firstElementChild
    this.tiles = this.shuffleArray(rows, columns)
    this.createImages(rows, columns, this.template, this.container)
  }

  createImages (rows, columns, template, container) {
    let turn1
    let turn2
    let lastTile
    this.tiles.forEach(function (tile, index) {
      const a = document.importNode(template, true)
      container.appendChild(a)
      a.addEventListener('click', function (event) {
        let img = event.target.nodeName === 'IMG' ? event.target : event.target.firstElementChild
        turnTile(tile, index, img)
      })

      function turnTile (tile, index, img) {

        console.log(tile)
        console.log(index)
        console.log(img)
        if(turn2){
          return
        }
        img.src = 'image/memoryGame/' + tile + '.png'


        if (!turn1) {
          turn1 = img
          lastTile = tile
          return
        } else {
          if(img === turn1){
            return;
          }
          turn2 = img;
          if (tile === lastTile) {
            console.log('pair')
          }
          turn1 = null
          turn2 = null
        }
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