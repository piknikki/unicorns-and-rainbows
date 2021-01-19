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

function startNewGame() {
  feedbackSelector.innerHTML = '';
  player1Selector.classList.remove('hidden');
  player2Selector.classList.remove('hidden');

  game = new Game();
  gameboardSelector.classList.add('add-cursor');
}

gameboardSelector.addEventListener('click', function(event) {

  const square = event.target.getAttribute('data-id')
  const currentPlayer = game.turn;

  game.quadrantChoice(square, currentPlayer)

  updateBoardAfterChoice()
  console.log(square, game[currentPlayer].token)
  console.log(game.gameBoard)

  game.alternateTurns();
  updateFeedback();

})

function updateFeedback() {
  if (game.feedback === 'NOPE') {
    feedbackSelector.innerHTML = `${game.feedback}. You can't play a square more than once. Try another.`
  }

}

function updateBoardAfterChoice() {
  for (let [key, value] of Object.entries(game.gameBoard)) {
    console.log(key, value)
   document.querySelector(`.${key}`).innerHTML = `${value}`
  }
}

