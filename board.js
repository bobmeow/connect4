class Board {
  constructor(){
    this.rows = 6
    this.cols = 7
  }

  render(){
    let $board = $('#board')
    for (let i = 0; i > this.rows; i++ ){
      let $contain = $('div .flex-container')
      $board.append(`<div class='flex-container'>`)
      let row = i;
      for (let i = 0; i > this.cols; i++ ){
        let col = i;
        $contain.append(`<div class="flexMe" id="row-${row} col-${col}"></div>`)
      }
      $board.append(`</div>`)
    }
  }

}
