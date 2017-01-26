class Connect4 {
  constructor() {
    this.board = new Board()
    this.playCount = 0
    this.positions = $('.flexMe')
  }
  render(){
    this.board.render()
    this.addEventHandlers()
  }

  addEventHandlers(){
    $('.flexMe').click( (event) => {
      this.currentPlayer()

      this.playCount += 1
    })
  }



  currentPlayer(){

      if (this.playCount % 2 === 0) {
        $(event.target).css('background-color', 'green')
      } else {
        $(event.target).css('background-color', 'purple')
      }
  }
}
