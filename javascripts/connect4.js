class Connect4 {
  constructor() {
    this.board = new Board()
    this.playCount = 0
  }

  render(){
    this.board.render()
    this.addEventHandlers()
  }

  addEventHandlers(){
    $('.flex-container, .flex-container.flexMe').click( (event) => {

      this.currentPlayer()
      this.playCount += 1
    })
  }

  currentPlayer(){
    if (event.target.classList.contains('flexMe')){
      var children = event.target.parentElement.children
    } else {
      var children = event.target.children
    }
    var currentChild = ""
    for (let i = 0; i < children.length; i++) {
      if (children[i].getAttribute('data-fill') === 'false')
      currentChild = children[i]
    }

    if (this.playCount % 2 === 0) {
      $(currentChild).css('background-color', 'red')
      $(currentChild).attr('data-fill', 'true')
      $(currentChild).attr('data-player', '1')
    } else {
      $(currentChild).css('background-color', 'yellow')
      $(currentChild).attr('data-fill', 'true')
      $(currentChild).attr('data-player', '2')
    }

  }
}
