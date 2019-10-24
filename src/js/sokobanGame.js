export default class sokobanGame {

  constructor (container, window) {
    this.tileMap = {
      column: 19,
      row: 16,
      mapGrid: [
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
        [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
        [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
        [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
        [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
        [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
        [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
      ]
    }

    this.playerPosition = 220
    this.up = this.playerPosition - 19
    this.down = this.playerPosition + 19
    this.left = this.playerPosition - 1
    this.right = this.playerPosition + 1

    this.container = document.querySelector(container)
    this.gameDiv = document.querySelectorAll('.skoboanContainer template')[0].content.firstElementChild //this is memory div

    // (0 = box) , (1 = goal), (2 = ground), (3 = person), (4 = wall)
    this.allImages = this.gameDiv.querySelectorAll('img')
    this.game = document.importNode(this.gameDiv, false)
    this.printMap(this.allImages, this.tileMap)
    this.start()
    this.container.appendChild(this.game)

  }

  printMap (allImages, tileMap) {
    for (let row = 0; row < tileMap.row; row++) {
      for (let column = 0; column < tileMap.column; column++) {
        if (tileMap.mapGrid[row][column][0] === ' ') {
          this.game.appendChild(document.importNode(this.allImages[2], false))
        }
        if (tileMap.mapGrid[row][column][0] === 'W') {
          this.game.appendChild(document.importNode(this.allImages[4], false))
        }
        if (tileMap.mapGrid[row][column][0] === 'B') {
          this.game.appendChild(document.importNode(this.allImages[0], false))
        }
        if (tileMap.mapGrid[row][column][0] === 'G') {
          this.game.appendChild(document.importNode(this.allImages[1], false))
        }
        if (tileMap.mapGrid[row][column][0] === 'P') {
          this.game.appendChild(document.importNode(this.allImages[3], false))
        }
      }
    }
  }

  // keycode : (38 up), (37 left), (39 right), (40 down)
  start () {
    window.onkeydown = (key) => {
      if (this.isWall(key.keyCode)) {
        return
      }
      this.checkTwoBoxes()
      this.checkBoxAndWall()
      switch (key.keyCode) {
        case 38:
          this.checkGoal()
          this.moveUp()
          break
        case 39:
          this.checkGoal()
          this.moveRight()
          break
        case 40:
          this.checkGoal()
          this.moveDown()
          break
        case 37:
          this.checkGoal()
          this.moveLeft()
          break
      }
    }
  }

  moveUp () {
    this.game.getElementsByTagName('IMG')[this.up]
      .setAttribute('src', 'image/sokobanGame/person.gif')
    this.game.getElementsByTagName('IMG')[this.playerPosition]
      .setAttribute('src', 'image/sokobanGame/ground.gif')

    this.down = this.playerPosition
    this.playerPosition = this.up
    this.up = this.up - 19
    this.left = this.playerPosition - 1
    this.right = this.playerPosition + 1
  }

  moveDown () {
    this.game.getElementsByTagName('IMG')[this.down]
      .setAttribute('src', 'image/sokobanGame/person.gif')
    this.game.getElementsByTagName('IMG')[this.playerPosition]
      .setAttribute('src', 'image/sokobanGame/ground.gif')

    this.up = this.playerPosition
    this.playerPosition = this.down
    this.down = this.down + 19
    this.left = this.playerPosition - 1
    this.right = this.playerPosition + 1
  }

  moveLeft () {
    this.game.getElementsByTagName('IMG')[this.left].setAttribute('src', 'image/sokobanGame/person.gif')
    this.game.getElementsByTagName('IMG')[this.playerPosition].setAttribute('src', 'image/sokobanGame/ground.gif')

    this.right = this.playerPosition
    this.playerPosition = this.left
    this.left = this.left - 1
    this.down = this.playerPosition + 19
    this.up = this.playerPosition - 19
  }

  moveRight () {
    this.game.getElementsByTagName('IMG')[this.right].setAttribute('src', 'image/sokobanGame/person.gif')
    this.game.getElementsByTagName('IMG')[this.playerPosition].setAttribute('src', 'image/sokobanGame/ground.gif')

    this.left = this.playerPosition
    this.playerPosition = this.right
    this.right = this.right + 1
    this.down = this.playerPosition + 19
    this.up = this.playerPosition - 19
  }

  checkBoxAndWall () {

  }

  // 49a475d810a853434f000b535f9e4382.gif ground
  // d77480fbbd22de843db212182bcd9e02.gif wall
  // 8446b401dfc2e12f42aba1874e6f4bb4.gif box
  // 6d333f4e3a314241695c33685e333d97.gif goal
  isWall (keyCode) {
    console.log(keyCode)
    if (keyCode == '38') {
      console.log('hi')
      return this.game.getElementsByTagName('IMG')[this.up]
        .getAttribute('src') === 'd77480fbbd22de843db212182bcd9e02.gif'
    } else if (keyCode == '40') {
      return this.game.getElementsByTagName('IMG')[this.down]
        .getAttribute('src') === 'd77480fbbd22de843db212182bcd9e02.gif'
    } else if (keyCode == '37') {
      return this.game.getElementsByTagName('IMG')[this.left]
        .getAttribute('src') === 'd77480fbbd22de843db212182bcd9e02.gif'
    } else if (keyCode == '39') {
      return this.game.getElementsByTagName('IMG')[this.right]
        .getAttribute('src') === 'd77480fbbd22de843db212182bcd9e02.gif'
    }
  }

  checkGround () {

  }

  checkTwoBoxes () {

  }

  checkGoal () {

  }
}