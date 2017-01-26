class Board {
  constructor(){
    this.rows = 6
    this.cols = 7
  }

  render(){
    let $board = $('#board')
    $('#buttons').append(`<div class='flex-button-container container-button'>`)
    for (let i = 1; i <= this.cols; i++ ){
      $(`.container-button`).append(`<button class="flex-button" id="button-${i}"></button>`)
    }
     for (let i = this.rows; i > 0; i-- ){
      let row = i;
      $board.append(`<div class='flex-container container-${row}'>`)
      for (let i = 1; i <= this.cols; i++ ){
        let col = i;
        $(`.container-${row}`).append(`<div class="flexMe" id="row-${row}-col-${col}"></div>`)
      }
    }
  }
}
