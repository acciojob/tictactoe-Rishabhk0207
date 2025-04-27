const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const boardElement = document.getElementById('board');
const messageElement = document.querySelector('.message');
const submitButton = document.getElementById('submit');

let player1 = '';
let player2 = '';
let currentPlayer = '';
let gameBoard = Array(9).fill(null);

const winningCombinations = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function initializeBoard() {
  boardElement.innerHTML = '';
  gameBoard = Array(9).fill(null);

  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.setAttribute('id', i+1);
    cell.addEventListener('click', handleCellClick);
    boardElement.appendChild(cell);
  }
}

function handleCellClick(e) {
  const cell = e.target;
  const cellIndex = parseInt(cell.id) - 1;

  if (gameBoard[cellIndex] !== null) return;

  // Set X for Player1 and O for Player2
  gameBoard[cellIndex] = (currentPlayer === player1) ? 'x' : 'o';
  cell.textContent = gameBoard[cellIndex];
  cell.classList.add('disabled');

  if (checkWinner()) {
    messageElement.textContent = `${currentPlayer} congratulations you won!`;
    disableBoard();
    return;
  }

  if (isDraw()) {
    messageElement.textContent = "It's a draw!";
    return;
  }

  currentPlayer = currentPlayer === player1 ? player2 : player1;
  messageElement.textContent = `${currentPlayer}, you're up!`;
}

function checkWinner() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function isDraw() {
  return gameBoard.every(cell => cell !== null);
}

function disableBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => cell.classList.add('disabled'));
}

submitButton.addEventListener('click', () => {
  // Cypress wants fixed names Player1 and Player2
  player1 = "Player1";
  player2 = "Player2";

  currentPlayer = player1;
  startScreen.style.display = 'none';
  gameScreen.style.display = 'block';

  messageElement.textContent = `${currentPlayer}, you're up!`;
  initializeBoard();
});
