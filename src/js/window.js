export default class window {

  constructor (container) {
    this.container = document.querySelector(container)
    this.windowDiv = document.querySelectorAll('.windowContainer template')[0].content.firstElementChild
    this.div = document.importNode(this.windowDiv, true)
    this.container.appendChild(this.div)

    let mousePosition
    let coordinates = [0, 0]
    let isDown = false

    this.windowDiv.firstElementChild.addEventListener('mousedown', event => {
      isDown = true
      console.log(event.target)
      coordinates = [
        this.windowDiv.firstElementChild.offsetLeft - event.clientX - 100,
        this.windowDiv.firstElementChild.offsetTop - event.clientY - 10
      ]
    }, true)

    this.windowDiv.firstElementChild.addEventListener('mouseup', function () {
      isDown = false
    }, true)

    this.windowDiv.firstElementChild.addEventListener('mousemove', function (event) {
      event.preventDefault()
      if (isDown) {
        console.log(event.clientX)
        mousePosition = {
          x: event.clientX,
          y: event.clientY
        }
        this.windowDiv.style.marginLeft = (mousePosition.x + coordinates[0]) + 'px'
        this.windowDiv.style.marginTop = (mousePosition.y + coordinates[1]) + 'px'
      }
    }, true)
  }
}