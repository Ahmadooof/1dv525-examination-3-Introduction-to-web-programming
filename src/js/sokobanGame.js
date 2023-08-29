
import boxSrc from '../image/sokobanGame/box.gif'
import goalSrc from '../image/sokobanGame/goal.gif'
import groundSrc from '../image/sokobanGame/ground.gif'
import personSrc from '../image/sokobanGame/person.gif'
import wallSrc from '../image/sokobanGame/wall.gif'


export default class sokobanGame {
  constructor(container, window) {
    this.boxImg = new Image();
    this.boxImg.src = boxSrc;

    this.groundImg = new Image();
    this.groundImg.src = groundSrc;

    this.wallImg = new Image();
    this.wallImg.src = wallSrc;

    this.goalImg = new Image();
    this.goalImg.src = goalSrc;

    this.personImg = new Image();
    this.personImg.src = personSrc;

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

    /**
     * these are the first positions for the player on the array and what up down left right of
     * the character.
     * @type {number}
     */
    this.playerPosition = 220
    this.up = this.playerPosition - 19
    this.down = this.playerPosition + 19
    this.left = this.playerPosition - 1
    this.right = this.playerPosition + 1

    this.container = document.querySelector(container)
    this.gameDiv = document.querySelectorAll('.skoboanContainer template')[0].content.firstElementChild

    /**
     *  (0 = box) , (1 = goal), (2 = ground), (3 = person), (4 = wall)
     */
    this.allImages = this.gameDiv.querySelectorAll('img')


    this.game = document.importNode(this.gameDiv, false)
    this.printMap(this.tileMap)
    this.start()
    this.container.appendChild(this.game)

    window.div.classList.add('sokobanWindow')
    const divRepresentWindow = document.createElement('div')
    divRepresentWindow.textContent = 'Sokoban Game'
    divRepresentWindow.className = 'sokobanGameTitle'
    window.div.firstElementChild.appendChild(divRepresentWindow)
  }

  /**
   * (0 = box) , (1 = goal), (2 = ground), (3 = person), (4 = wall)
   * @param allImages
   * @param tileMap
   */
  printMap(tileMap) {
    const table = document.createElement('table');
    table.className = 'gameGrid'; // You might need to adjust the class name

    for (let row = 0; row < tileMap.row; row++) {
      const tr = document.createElement('tr');

      for (let column = 0; column < tileMap.column; column++) {
        const td = document.createElement('td');
        const tileType = tileMap.mapGrid[row][column][0];

        const img = document.createElement('img');
        img.className = 'gameTile'; // You might need to adjust the class name

        if (tileType === ' ') {
          img.src = groundSrc;
        } else if (tileType === 'W') {
          img.src = wallSrc;
        } else if (tileType === 'B') {
          img.src = boxSrc;
        } else if (tileType === 'G') {
          img.src = goalSrc;
        } else if (tileType === 'P') {
          img.src = personSrc;
        }

        td.appendChild(img);
        tr.appendChild(td);
      }

      table.appendChild(tr);
    }

    this.game.appendChild(table);
  }



  /**
   * keycode : (38 up), (37 left), (39 right), (40 down)
   */
  start() {
    window.onkeydown = (key) => {
      if (this.isWallOrTwoBoxes(key.keyCode) || this.isBoxAndWall(key.keyCode)) {
        return
      }
      switch (key.keyCode) {

        case 38:
          if (this.checkIfBoxAround(key.keyCode)) {
            this.moveBox(key.keyCode)
            this.moveUp()
            return
          } else this.moveUp()
          return
        case 39:
          if (this.checkIfBoxAround(key.keyCode)) {
            this.moveBox(key.keyCode)
            this.moveRight()
            return
          } else this.moveRight()
          return
        case 40:
          if (this.checkIfBoxAround(key.keyCode)) {
            this.moveBox(key.keyCode)
            this.moveDown()
            return
          } else this.moveDown()
          return
        case 37:
          if (this.checkIfBoxAround(key.keyCode)) {
            this.moveBox(key.keyCode)
            this.moveLeft()
          } else this.moveLeft()
          return
      }
    }
  }

  /** image/sokobanGame/box.gif box
   *  image/sokobanGame/goal.gif goal
   * @returns {boolean}
   */
  isPlayerWalkOnGoal() {
    if (
      (this.game.getElementsByTagName('IMG')[this.up].getAttribute('src') === goalSrc) |
      (this.game.getElementsByTagName('IMG')[this.down].getAttribute('src') === goalSrc) |
      ((this.game.getElementsByTagName('IMG')[this.right].getAttribute('src') === goalSrc) &
        (this.game.getElementsByTagName('IMG')[this.up].getAttribute('src') === boxSrc)) |
      ((this.game.getElementsByTagName('IMG')[this.right].getAttribute('src') === goalSrc) &
        (this.game.getElementsByTagName('IMG')[this.down].getAttribute('src') === boxSrc)) |
      ((this.game.getElementsByTagName('IMG')[this.left].getAttribute('src') === goalSrc) &
        (this.game.getElementsByTagName('IMG')[this.up].getAttribute('src') === boxSrc)) |
      ((this.game.getElementsByTagName('IMG')[this.left].getAttribute('src') === goalSrc) &
        (this.game.getElementsByTagName('IMG')[this.down].getAttribute('src') === boxSrc))
    ) {
      return true
    } else return false
  }


  /**
   * if box around the character before moving
   * @param keyCode
   * @returns {boolean}
   */
  checkIfBoxAround(keyCode) {
    if (keyCode === 37) {
      return this.game.getElementsByTagName('IMG')[this.left]
        .getAttribute('src') === boxSrc
    }
    if (keyCode === 38) {
      return this.game.getElementsByTagName('IMG')[this.up]
        .getAttribute('src') === boxSrc
    }
    if (keyCode === 40) {
      return this.game.getElementsByTagName('IMG')[this.down]
        .getAttribute('src') === boxSrc
    }
    if (keyCode === 39) {
      return this.game.getElementsByTagName('IMG')[this.right]
        .getAttribute('src') === boxSrc
    }
  }

  // image/sokobanGame/box.gif box
  /**
   * moving the box by changing the img src
   * @param keyCode
   */
  moveBox(keyCode) {
    if (keyCode === 37) {
      this.game.getElementsByTagName('IMG')[this.left - 1]
        .setAttribute('src', boxSrc)
    }
    if (keyCode === 38) {
      this.game.getElementsByTagName('IMG')[this.up - 19]
        .setAttribute('src', boxSrc)
    }
    if (keyCode === 39) {
      this.game.getElementsByTagName('IMG')[this.right + 1]
        .setAttribute('src', boxSrc)
    }
    if (keyCode === 40) {
      this.game.getElementsByTagName('IMG')[this.down + 19]
        .setAttribute('src', boxSrc)
    }
  }

  /**
   * if player on goal then change the goal image with character image else move on ground
   */
  moveUp() {
    if (this.isPlayerWalkOnGoal()) {
      this.game.getElementsByTagName('IMG')[this.up].setAttribute('src', personSrc)
      this.game.getElementsByTagName('IMG')[this.playerPosition].setAttribute('src', goalSrc)
    } else {
      this.game.getElementsByTagName('IMG')[this.up]
        .setAttribute('src', personSrc)
      this.game.getElementsByTagName('IMG')[this.playerPosition]
        .setAttribute('src', groundSrc)
    }

    this.down = this.playerPosition
    this.playerPosition = this.up
    this.up = this.up - 19
    this.left = this.playerPosition - 1
    this.right = this.playerPosition + 1
  }

  /**
   * if player on goal then change the goal image with character image else move on ground
   */
  moveDown() {
    if (this.isPlayerWalkOnGoal()) {
      this.game.getElementsByTagName('IMG')[this.down].setAttribute('src', personSrc)
      this.game.getElementsByTagName('IMG')[this.playerPosition].setAttribute('src', goalSrc)
    } else {
      this.game.getElementsByTagName('IMG')[this.down]
        .setAttribute('src', personSrc)
      this.game.getElementsByTagName('IMG')[this.playerPosition]
        .setAttribute('src', groundSrc)
    }
    this.up = this.playerPosition
    this.playerPosition = this.down
    this.down = this.down + 19
    this.left = this.playerPosition - 1
    this.right = this.playerPosition + 1
  }

  /**
   * if player on goal then change the goal image with character image else move on ground
   */
  moveLeft() {
    if (this.isPlayerWalkOnGoal()) {
      this.game.getElementsByTagName('IMG')[this.left].setAttribute('src', personSrc)
      this.game.getElementsByTagName('IMG')[this.playerPosition].setAttribute('src', goalSrc)
    } else {
      this.game.getElementsByTagName('IMG')[this.left]
        .setAttribute('src', personSrc)
      this.game.getElementsByTagName('IMG')[this.playerPosition]
        .setAttribute('src', groundSrc)
    }
    this.right = this.playerPosition
    this.playerPosition = this.left
    this.left = this.left - 1
    this.down = this.playerPosition + 19
    this.up = this.playerPosition - 19
  }

  /**
   * if player on goal then change the goal image with character image else move on ground
   */
  moveRight() {
    if (this.isPlayerWalkOnGoal()) {
      this.game.getElementsByTagName('IMG')[this.right].setAttribute('src', personSrc)
      this.game.getElementsByTagName('IMG')[this.playerPosition].setAttribute('src', goalSrc)
    } else {
      this.game.getElementsByTagName('IMG')[this.right]
        .setAttribute('src', personSrc)
      this.game.getElementsByTagName('IMG')[this.playerPosition]
        .setAttribute('src', groundSrc)
    }
    this.left = this.playerPosition
    this.playerPosition = this.right
    this.right = this.right + 1
    this.down = this.playerPosition + 19
    this.up = this.playerPosition - 19
  }

  /**
   *    image/sokobanGame/box.gif box
   *    image/sokobanGame/goal.gif goal
   *    image/sokobanGame/ground.gif ground
   *    image/sokobanGame/wall.gif wall
   *
   *    if box comes before wall then return true to not move
   *
   * @param keyCode
   * @returns {boolean}
   */
  isBoxAndWall(keyCode) {
    if (keyCode === 37) {
      if ((this.game.getElementsByTagName('IMG')[this.left].getAttribute('src') === boxSrc) &
        (this.game.getElementsByTagName('IMG')[this.left - 1].getAttribute('src') === wallSrc)) {
        return true
      } else return false
    }
    if (keyCode === 38) {
      if ((this.game.getElementsByTagName('IMG')[this.up].getAttribute('src') === boxSrc) &
        (this.game.getElementsByTagName('IMG')[this.up - 19].getAttribute('src') === wallSrc)) {
        return true
      } else return false
    }
    if (keyCode === 39) {
      if ((this.game.getElementsByTagName('IMG')[this.right].getAttribute('src') === boxSrc) &
        (this.game.getElementsByTagName('IMG')[this.right + 1].getAttribute('src') === wallSrc)) {
        return true
      } else return false
    }
    if (keyCode === 40) {
      if ((this.game.getElementsByTagName('IMG')[this.down].getAttribute('src') === boxSrc) &
        (this.game.getElementsByTagName('IMG')[this.down + 19].getAttribute('src') === wallSrc)) {
        return true
      }
    }
  }

  /**
   * if comes wall or two boxes beside each other then return true, to not move.
   * @param keyCode
   * @returns {boolean|number}
   */
  isWallOrTwoBoxes(keyCode) {
    if (keyCode === 38) {
      return (this.game.getElementsByTagName('IMG')[this.up].getAttribute('src') === (wallSrc)) ||
        (this.game.getElementsByTagName('IMG')[this.up].getAttribute('src') === boxSrc &
          this.game.getElementsByTagName('IMG')[this.up - 19].getAttribute('src') === boxSrc)
    } else if (keyCode === 40) {
      return (this.game.getElementsByTagName('IMG')[this.down].getAttribute('src') === wallSrc) ||
        (this.game.getElementsByTagName('IMG')[this.down].getAttribute('src') === boxSrc &
          this.game.getElementsByTagName('IMG')[this.down + 19].getAttribute('src') === boxSrc)
    } else if (keyCode === 37) {
      return (this.game.getElementsByTagName('IMG')[this.left].getAttribute('src') === wallSrc) ||
        (this.game.getElementsByTagName('IMG')[this.left].getAttribute('src') === boxSrc &
          this.game.getElementsByTagName('IMG')[this.left - 1].getAttribute('src') === boxSrc)
    } else if (keyCode === 39) {
      return (this.game.getElementsByTagName('IMG')[this.right].getAttribute('src') === wallSrc) ||
        (this.game.getElementsByTagName('IMG')[this.right].getAttribute('src') === boxSrc &
          this.game.getElementsByTagName('IMG')[this.right + 1].getAttribute('src') === boxSrc)
    }
  }
}
