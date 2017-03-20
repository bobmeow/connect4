class Board {
  constructor(){
    this.cols = 7
    this.rows = 6
  }

  render(){
    let $board = $('#board')
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
