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
    // this.determineWinner(player)
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
    debugger
    // if this returns false it means there is at least one empty square
    var h1 = this.checkForEmptySquares(['r1s1', 'r1s2', 'r1s3']);
    var h2 = this.checkForEmptySquares(['r2s1', 'r2s2', 'r2s3']);
    var h3 = this.checkForEmptySquares(['r3s1', 'r3s2', 'r3s3']);

    var v1 = this.checkForEmptySquares(['r1s1', 'r2s1', 'r3s1']);
    var v2 = this.checkForEmptySquares(['r1s2', 'r2s2', 'r3s2']);
    var v3 = this.checkForEmptySquares(['r1s3', 'r2s3', 'r3s3']);

    var d1 = this.checkForEmptySquares(['r1s1', 'r2s2', 'r3s3']);
    var d2 = this.checkForEmptySquares(['r1s3', 'r2s2', 'r3s1']);

    // should only check for win if there are no empty squares in the combination played
    var response;
    if (h1 === true && (this.gameBoard.r1s1 === this.gameBoard.r1s2 && this.gameBoard.r1s2 === this.gameBoard.r1s3)) {
      response = true
    } else if (h2 === true && (this.gameBoard.r2s1 === this.gameBoard.r2s2 && this.gameBoard.r2s2 === this.gameBoard.r2s3)) {
      response = true
    } else if (h3 === true && (this.gameBoard.r3s1 === this.gameBoard.r3s2 && this.gameBoard.r3s2 === this.gameBoard.r3s3)) {
      response = true
    } else if (v1 === true && (this.gameBoard.r1s1 === this.gameBoard.r2s1 && this.gameBoard.r2s1 === this.gameBoard.r3s1)) {
      response = true
    } else if (v2 === true && (this.gameBoard.r1s2 === this.gameBoard.r2s2 && this.gameBoard.r2s2 === this.gameBoard.r3s2)) {
      response = true
    } else if (v3 === true && (this.gameBoard.r1s3 === this.gameBoard.r2s3 && this.gameBoard.r2s3 === this.gameBoard.r3s3)) {
      response = true
    } else if (d1 === true && (this.gameBoard.r1s1 === this.gameBoard.r2s2 && this.gameBoard.r2s2 === this.gameBoard.r3s3)) {
      response = true
    } else if (d2 === true && (this.gameBoard.r1s3 === this.gameBoard.r2s2 && this.gameBoard.r2s2 === this.gameBoard.r3s1)) {
      response = true
    } else {
      response = false
    }

    if (response === true) {
      console.log(response)
      this.winner = player
      this.feedback = 'winner'
    } else {
      this.feedback = ''
    }
  }

  checkForEmptySquares(list) {

    // list of three string values
    var response;
    list.forEach(val => {
      response = val in this.gameBoard
    })

    // returns false if one of these keys is not in the object, which means there are one or more empty squares
    // don't need to check for win if there are empty squares
    if (response === false) {
      return false
    } else {
      return true
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
