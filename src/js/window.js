export default class window {

  isDown
  coordinates
  mousePosition

  constructor (container) {
    this.container = document.querySelector(container)
    this.windowDiv = document.querySelectorAll('.windowContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.windowDiv, true)
    this.container.appendChild(this.div)


    this.div.firstElementChild.addEventListener('mousedown', this.mouseDown, true)
    this.div.firstElementChild.addEventListener('mouseup', this.mouseUp, true)
    this.div.firstElementChild.addEventListener('mousemove', this.mouseMove, true)
  }

  mouseDown (event) {
    this.isDown = true
    this.coordinates = [
      this.parentNode.offsetLeft - event.clientX - 150,
      this.parentNode.offsetTop - event.clientY - 40
    ]
  }

  mouseUp () {
    this.isDown = false
  }

  mouseMove (event) {
    if (this.isDown) {
      this.mousePosition = {
        x: event.clientX,
        y: event.clientY
      }
      this.parentNode.style.left = (this.mousePosition.x + this.coordinates[0]) + 'px'
      this.parentNode.style.top = (this.mousePosition.y + this.coordinates[1]) + 'px'
    }
  }
}