export default class memoryGame {

  const img
  constructor (rows, columns, container){
    this.createImages(rows,columns)
  }

  createImages (rows, columns) {
    for(let i = 0; i < rows*columns; i++){
      img = document.createElement('img');
      img.setAttribute("src", "")
    }
  }


}