export default class memoryGame {

  constructor (rows, columns, container){
    this.container = document.getElementById(container);
    this.rows = rows;
    this.columns = columns;
    this.createImages()
  }

  createImages () {
    for(let i = 0; i < this.rows*this.columns; i++){
      let img = document.createElement('img');
      img.setAttribute("src", "https://github.com/1dv525/aa224rm-examination-3/blob/master/src/image/memoryGame/0.png?raw=true")
      this.container.appendChild(img);
    }
  }


}