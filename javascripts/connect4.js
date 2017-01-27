class Connect4 {
  constructor() {
    this.board = new Board()
    this.playCount = 0

  }
  render(){
    this.board.render()
    this.addEventHandlers()
  }
//
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
      $(currentChild).css('background-color', 'green')
      $(currentChild).attr('data-fill', 'true')
      $(currentChild).attr('data-player', '1')
    } else {
      $(currentChild).css('background-color', 'purple')
      $(currentChild).attr('data-fill', 'true')
      $(currentChild).attr('data-player', '2')
    }
    // if (currentChild.nextSibling !== null){
    //   console.log('hi')
    //   if (this.playCount % 2 === 0) {
    //     if (currentChild.nextSibling.dataset.player.includes('1')){
    //       console.log('match')
    //     }
    //   } else {
    //     if (currentChild.nextSibling.dataset.player.includes('2')){
    //       console.log('match')
    //     }
    //   }
    // }

    var colObj = {}
    colObj[currentChild.getAttribute('data-player')] = currentChild.parentElement.id
    // obj[`row-${currentChild.id}`] = currentChild.getAttribute('data-player')

    colTracker.push( colObj )
    // console.log(colTracker)
    // let matches = []
    //
    var matches = []
    var counter1 = 0
    var counter2 = 1
    var counter = 1
    var obj = {}

      while (counter1 < colTracker.length) {
        while (counter2 < colTracker.length) {
          var iValue = Object.values(colTracker[counter1])[0]
          var iKey = Object.keys(colTracker[counter1])[0]
          var jValue = Object.values(colTracker[counter2])[0]
          var jKey = Object.keys(colTracker[counter2])[0]

          if (iValue === jValue && jKey === iKey && currentChild.getAttribute('data-player') === '1'  ) {

            if (obj[currentChild.parentElement.id] >= 1){
                obj[currentChild.parentElement.id] += 1
                } else {

                  obj[currentChild.parentElement.id] = 1
                }
          }

          counter2++
        }
        counter1++
      }

    console.log(obj)

}
}

var colTracker = []
