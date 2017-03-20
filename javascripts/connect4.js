class Connect4 {
  constructor() {
    this.board = new Board()
    this.playCount = 0
    this.array = [
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0]
    ]
  }

  render(){
    this.board.render()
    this.checkForWin()
    this.addEventHandlers()
  }

  addEventHandlers(){
    $('.flex-container, .flex-container.flexMe').click( (event) => {
      if (!this.checkForWin()) {
        this.currentPlayer()
        this.playCount += 1
      }
    })
  }

  endGame() {
        $('.flexMe').fadeTo('400','#e5ebf1', function(event) {
          $(this).css('background-color', '#e5ebf1')
        })
        $('.flexMe').attr('data-fill', 'false')

        this.array = [
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0],
          [0,0,0,0,0,0,0]
        ]

        this.playCount = 0
        $('.win').html('');
  }

  winActions(pos1) {
    $('.win').text(`Player ${pos1} Wins`)
      $('.blur').css('filter', 'blur(5px)')
      $('.popup .content').text('Great game! To play again, close this popup.')
      $('.overlay').css('visibility', 'visible')
    $('.popup').css('visibility', 'visible')
    $('.close').click((event) => {
      $('.blur').css('filter', 'none')
      $('.popup .content').text('One moment, resetting the board...')
      $('.popup').css('visibility', 'hidden')
      $('.overlay').css('visibility', 'hidden')

        this.endGame()
    })
  }


  //vertical
  checkForWin(){
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 7; column++) {
        let pos1 = this.array[row][column]
        let pos2 = this.array[row + 1][column]
        let pos3 = this.array[row + 2][column]
        let pos4 = this.array[row + 3][column]
        if (pos1 !== 0 && pos1 === pos2 && pos1 === pos3 && pos1 === pos4) {
          this.winActions(pos1)

          return true
        }
      }
    }


    //horizontal
    for (let row = 0; row < 6; row++) {
      for (let column = 0; column < 4; column++) {
        let pos1 = this.array[row][column]
        let pos2 = this.array[row][column + 1]
        let pos3 = this.array[row][column + 2]
        let pos4 = this.array[row][column + 3]
        if (pos1 !== 0 && pos1 === pos2 && pos1 === pos3 && pos1 === pos4) {
          this.winActions(pos1)

          return true
        }
      }
    }

    //diagonal
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 4; column++) {
        let pos1 = this.array[row][column]
        let pos2 = this.array[row + 1][column + 1]
        let pos3 = this.array[row + 2][column + 2]
        let pos4 = this.array[row + 3][column + 3]
        if (pos1 !== 0 && pos1 === pos2 && pos1 === pos3 && pos1 === pos4) {
          this.winActions(pos1)
          return true
        }
      }
    }

    for (let row = 3; row < 6; row++) {
      for (let column = 0; column < 4; column++) {
        let pos1 = this.array[row][column]
        let pos2 = this.array[row - 1][column + 1]
        let pos3 = this.array[row - 2][column + 2]
        let pos4 = this.array[row - 3][column + 3]
        if (pos1 !== 0 && pos1 === pos2 && pos1 === pos3 && pos1 === pos4) {
        this.winActions(pos1)
          return true
        }
      }
    }
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
      $(currentChild).css('background-color', 'rgba( 255 , 57 , 46 , 1 )')
      $(currentChild).attr('data-fill', 'true')
      this.array[parseInt($(currentChild).data('row')-1)][parseInt($(currentChild).data('column'))-1] = 1
    } else {
      $(currentChild).css('background-color', 'rgba( 70 , 71 , 72 , 1 )')
      $(currentChild).attr('data-fill', 'true')
      this.array[parseInt($(currentChild).data('row'))-1][parseInt($(currentChild).data('column')) -1] = 2
    }
    this.checkForWin()
  }
}
