// global for game

// selectors for each of the quadrants?
// click events on each of quadrants. maybe use bubbling.
// button to start a new game
// highlighting to show who's turn it is
// save data on player's side
var game;

const feedbackSelector = document.querySelector('.feedback-message');
const startSelector = document.querySelector('button');
const player1Selector = document.querySelector('.player1');
const player2Selector = document.querySelector('.player2');
const gameboardSelector = document.querySelector('.gameboard');

startSelector.addEventListener('click', startNewGame);

gameboardSelector.addEventListener('click', function(event) {

  const square = event.target.getAttribute('data-id')
  const currentPlayer = game.turn;

  game.quadrantChoice(square, currentPlayer)

  updateBoardAfterChoice()
  game.determineWinner(currentPlayer)

  updateFeedback();

})

function startNewGame() {
  updateBoardForNewGame();

  feedbackSelector.innerHTML = '';
  player1Selector.classList.remove('hidden');
  player2Selector.classList.remove('hidden');
  startSelector.classList.add('hidden');

  game = new Game();
  gameboardSelector.classList.add('add-cursor');
  updateWins();
}

function updateFeedback() {
  var chunk;

  if (game.feedback === 'nope') {
    chunk = `${game.feedback.toUpperCase()}. You can't play a square more than once. Try another.`

  } else if (game.feedback === 'full' && !game.winner) {
    chunk = `Draw. No winner. Try again.`
    game.reset();
    startSelector.classList.remove('hidden');

  } else if (game.feedback === 'winner') {
    chunk = `${formatName(game.winner)} is the ${game.feedback}!! Play again?`
    startSelector.classList.remove('hidden');
    game.reset();

  } else {
    chunk = ''
  }

  feedbackSelector.innerHTML = chunk
  updateWins();
}

function updateBoardAfterChoice() {
  for (let [key, value] of Object.entries(game.gameBoard)) {
   document.querySelector(`.${key}`).innerHTML = `${value}`
  }
}

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1, 6) + " " + name[6]
}

function updateBoardForNewGame() {
  var allSquares = document.querySelectorAll('.gameboard__row--square')

  allSquares.forEach(square => square.innerHTML = '')
}

function updateWins() {
  var winsp1 = JSON.parse(localStorage.getItem('player1'));
  var winsp2 = JSON.parse(localStorage.getItem('player2'));

  if (winsp1 != null) {
    document.querySelector('.player1__score').innerHTML = `${winsp1} wins`
    game.player1.wins = winsp1
  } else {
    document.querySelector('.player1__score').innerHTML = `0 wins`
  }

  if (winsp2 != null) {
    document.querySelector('.player2__score').innerHTML = `${winsp2} wins`
    game.player2.wins = winsp2
  } else {
    document.querySelector('.player2__score').innerHTML = `0 wins`
  }
}

