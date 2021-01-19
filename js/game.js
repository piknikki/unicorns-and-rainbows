class Game {
  constructor() {
    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.gameBoard = {}; // todo --> is this an array or an object??
    this.turn = 'player1';
    this.winner = null;
    this.loser = null;
    this.turnCount = 0;
    this.feedback = '';
    this.feedbackPlayer = '';
  }

  quadrantChoice(square, player) {
    // todo --> player makes a choice on the board. Need to know player and board location.
    if (!(square in this.gameBoard)) {
      this.gameBoard[square] = this[player].token

    } else if (square in this.gameBoard) {
      this.feedback = 'nope'
    } else if (this.turnCount === 8) {
      this.feedback = 'full'
    }
    this.alternateTurns()

    if (this.turnCount > 4) {
      this.determineWinner(player)
    }

  }

  // updateBoard() {
  //
  // }

  alternateTurns() {
    // todo --> when player makes a choice, change turn to next player.
    if (this.turnCount % 2 === 0) {
      this.turn = 'player2'
    } else {
      this.turn = 'player1'
    }
    this.turnCount++
    return this.turn;
  }

  determineWinner(player) {
    // todo --> check this after every move. check if three in a row in any direction.
    // todo --> make this a switch??

    var response;
    if (this.gameBoard.r1s1 === this.gameBoard.r2s2 && this.gameBoard.r1s1 === this.gameBoard.r3s3) {
      response = 'diagonal left'

    } else if (this.gameBoard.r1s1 === this.gameBoard.r1s2 && this.gameBoard.r1s1 === this.gameBoard.r1s3) {
      response = 'horizontal top'

    } else if (this.gameBoard.r2s1 === this.gameBoard.r2s2 && this.gameBoard.r2s1 === this.gameBoard.r2s3) {
      response = 'horizontal middle'

    } else if (this.gameBoard.r3s1 === this.gameBoard.r3s2 && this.gameBoard.r3s1 === this.gameBoard.r3s3) {
      if (this.gameBoard.r3s1 === undefined || this.gameBoard.r3s2 === undefined || this.gameBoard.r3s3 === undefined) {
        response = 'none'
      } else {
        response = 'horizontal bottom'
      }

    } else if (this.gameBoard.r1s1 === this.gameBoard.r2s1 && this.gameBoard.r1s1 === this.gameBoard.r3s1) {
      response = 'vertical left'

    } else if (this.gameBoard.r1s3 === this.gameBoard.r2s3 && this.gameBoard.r1s3 === this.gameBoard.r3s3) {
      response = 'vertical right'

    } else if (this.gameBoard.r1s2 === this.gameBoard.r2s2 && this.gameBoard.r1s2 === this.gameBoard.r3s2) {
      response = 'vertical middle'

    } else if (this.gameBoard.r3s1 === this.gameBoard.r2s2 && this.gameBoard.r3s1 === this.gameBoard.r1s3) {
      response = 'diagonal right'

    } else {
      response = 'none'
    }

    if (response !== 'none') {
      console.log(response)
      this.winner = player
      this.feedback = 'winner'
    } else {
      this.feedback = ''
    }
  }

  determineDraw() {
    // todo --> check if no one has won. all quadrants are full and there are no three in a row
  }

  saveWinBoard() {
    // todo--> collects board configuration and pushes that to winning player's winBoards array
  }

  reset() {
    // todo --> resets board data but keeps players' tokens so they can keep playing.
    this.gameBoard = {};
    this.winner = null;
    this.loser = null;
    this.turnCount = 0;
    this.feedback = '';
    this.feedbackPlayer = '';
  }

}
