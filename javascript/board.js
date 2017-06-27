class Board {
  constructor(){
    this.cols = 7
    this.rows = 6
  }

  render(){
    let $board = $('#board')
    // $('#buttons').append(`<div class='flex-button-container container-button'>`)
    // for (let i = 1; i <= this.rows; i++ ){
    //   $(`.container-button`).append(`<button class="flex-button" id="button-${i}"></button>`)
    // }
     for (var i = 1; i <= this.cols; i++){
      let col = i;
      $board.append(`<div id="${col}" class='flex-container container-${col}'>`)
      for (var j = this.rows; j > 0; j-- ){
        let row = j;
        $(`.container-${col}`).append(`<div class="flexMe" data-fill="false" data-player="0" data-row="${j}" data-column="${i}"></div>`)
      }
    }
  }
}
