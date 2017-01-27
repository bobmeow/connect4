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
    $('body').css('background-image', `url(${backgrounds[Math.floor(Math.random() * backgrounds.length)]})`)
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
