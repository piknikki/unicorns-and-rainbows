class Game {
  constructor() {
    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.gameBoard = []; // todo --> is this an array or an object??
    this.turn = 'player1';
    this.winner = null;
    this.loser = null;
    this.turnCount = 1;
    this.feedback = '';
    this.feedbackPlayer = '';
  }

  quadrantChoice() {
    // todo --> player makes a choice on the board. Need to know player and board location.
  }

  updateBoard() {
    // todo --> when player makes a move, update the board. pass in player and move
  }

  alternateTurns() {
    // todo --> when player makes a choice, change turn to next player.
  }

  determineWinner() {
    // todo --> check this after every move. check if three in a row in any direction.
  }

  determineDraw() {
    // todo --> check if no one has won. all quadrants are full and there are no three in a row
  }

  saveWinBoard() {
    // todo--> collects board configuration and pushes that to winning player's winBoards array
  }

  reset() {
    // todo --> resets board data but keeps players' tokens so they can keep playing.
  }

}
