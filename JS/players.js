// $(document).ready(function() {
//     // all custom jQuery will go here
// });

class Player {
    constructor(domElement) {
      this.domElement = domElement;
      this.domElement.addEventListener('click', () => this.expandPlayer());
    }
  
    expandPlayer() {
      this.domElement.classList.toggle('player-open');
    }
  }
  
  let players = document.querySelectorAll('.player');
  players.forEach(function(player) {new Player(player);});