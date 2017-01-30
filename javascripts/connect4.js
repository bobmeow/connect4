var backgrounds = [
  "http://i.giphy.com/26BRLblDUw8VAhoFq.gif",
  "http://i.giphy.com/qBhCZARUiS5WM.gif",
  "http://i.giphy.com/11fSxqu3FUp2M0.gif",
  "http://i.giphy.com/tzrlO0JiwjS7e.gif",
  "http://i.giphy.com/3oriOeBHxdF9FokwJq.gif",
  "http://i.giphy.com/mcT6IxQicH7hu.gif",
  "http://i.giphy.com/l3q2ZlDOphy540eli.gif",
  "http://i.giphy.com/26xBzu2ogAunL19hS.gif",
  "http://i.giphy.com/NxWk4NY7C59Fm.gif",
  "http://i.giphy.com/dGBiI0Wx9WPte.gif",
  "http://i.giphy.com/BlcWQ9L2VfOFO.gif",
  "http://i.giphy.com/3oEduH8ySCZMrUdytW.gif",
  "http://i.giphy.com/UsqR2a5lOCzAI.gif",
  "http://i.giphy.com/CLkMWh66GNkm4.gif"
]

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

  


  //vertical
  checkForWin(){
   for (let row = 0; row < 3; row++) {
     for (let column = 0; column < 7; column++) {
       let pos1 = this.array[row][column]
       let pos2 = this.array[row + 1][column]
       let pos3 = this.array[row + 2][column]
       let pos4 = this.array[row + 3][column]
       if (pos1 !== 0 && pos1 === pos2 && pos1 === pos3 && pos1 === pos4) {
         console.log("win")
         $('.win').text(`Player ${pos1} wins`)
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
         console.log("win")
         $('.win').text(`Player ${pos1} wins`)
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
         console.log("win")
         $('.win').text(`Player ${pos1} wins`)
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
         console.log("win")
         $('.win').text(`Player ${pos1} wins`)
         return true
       }
     }
   }
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
    $('body').css('background-image', `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`)
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
