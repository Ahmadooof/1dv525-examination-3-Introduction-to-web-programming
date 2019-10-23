export default class window {

  constructor (container) {
    this.container = document.querySelector(container)
    this.windowDiv = document.querySelectorAll('.windowContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.windowDiv, true)
    this.container.appendChild(this.div)

    this.closeWindowElement = this.div.childNodes[1].childNodes[1]

    this.div.addEventListener('mousedown', this.mouseDown, true)
    this.div.addEventListener('mouseup', this.mouseUp, true)
    this.div.addEventListener('mousemove', this.mouseMove, true)
    this.closeWindowElement.addEventListener('click', (event) => {
      this.div.remove()
    })
  }

  mouseDown (event) {
    this.isDown = true
    this.coordinates = [
      this.offsetLeft - event.clientX - 150,
      this.offsetTop - event.clientY - 40
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
      this.style.left = (this.mousePosition.x + this.coordinates[0]) + 'px'
      this.style.top = (this.mousePosition.y + this.coordinates[1]) + 'px'
    }
  }
}