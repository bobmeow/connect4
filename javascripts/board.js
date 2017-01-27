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
     for (let i = 1; i <= this.cols; i++){
      let col = i;
      $board.append(`<div id="${col}" class='flex-container container-${col}'>`)
      for (let i = this.rows; i > 0; i-- ){
        let row = i;
        $(`.container-${col}`).append(`<div class="flexMe row-${row}" id="${row}" data-fill="false" data-player="0"></div>`)
      }
    }
  }
}
