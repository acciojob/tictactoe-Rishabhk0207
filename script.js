// //your JS code here. If required.
// const startScreen = document.getElementById('start-screen');
//     const gameScreen = document.getElementById('game-screen');
//     const boardElement = document.getElementById('board');
//     const messageElement = document.querySelector('.message');
//     const submitButton = document.getElementById('submit');

//     let player1 = '';
//     let player2 = '';
//     let currentPlayer = '';
//     let gameBoard = Array(9).fill(null);

//     // Winning combinations
//     const winningCombinations = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6]
//     ];

//     // Initialize board
//     function initializeBoard() {
//       boardElement.innerHTML = '';
//       gameBoard = Array(9).fill(null);

//       for (let i = 0; i < 9; i++) {
//         const cell = document.createElement('div');
//         cell.classList.add('cell');
//         cell.setAttribute('id', i);
//         cell.addEventListener('click', handleCellClick);
//         boardElement.appendChild(cell);
//       }
//     }

//     // Check for a winner
//     function checkWinner() {
//       for (const combination of winningCombinations) {
//         const [a, b, c] = combination;
//         if (
//           gameBoard[a] &&
//           gameBoard[a] === gameBoard[b] &&
//           gameBoard[a] === gameBoard[c]
//         ) {
//           return true;
//         }
//       }
//       return false;
//     }

//     // Check if the game is a draw
//     function isDraw() {
//       return gameBoard.every(cell => cell !== null);
//     }

//     // Handle cell click
//     function handleCellClick(e) {
//       const cell = e.target;
//       const cellIndex = parseInt(cell.id);

//       if (gameBoard[cellIndex] !== null) return;

//       gameBoard[cellIndex] = currentPlayer === player1 ? 'X' : 'O';
//       cell.textContent = gameBoard[cellIndex];
//       cell.classList.add('disabled');

//       if (checkWinner()) {
//         messageElement.textContent = `${currentPlayer}, congratulations you won!`;
//         disableBoard();
//         return;
//       }

//       if (isDraw()) {
//         messageElement.textContent = "It's a draw!";
//         return;
//       }

//       currentPlayer = currentPlayer === player1 ? player2 : player1;
//       messageElement.textContent = `${currentPlayer}, you're up!`;
//     }

//     // Disable board
//     function disableBoard() {
//       const cells = document.querySelectorAll('.cell');
//       cells.forEach(cell => cell.classList.add('disabled'));
//     }

//     // Handle submit button click
//     submitButton.addEventListener('click', () => {
//       player1 = document.getElementById('player-1').value.trim();
//       player2 = document.getElementById('player-2').value.trim();

//       if (!player1 || !player2) {
//         alert('Please enter names for both players.');
//         return;
//       }

//       currentPlayer = player1;
//       messageElement.textContent = `${currentPlayer}, you're up!`;

//       startScreen.style.display = 'none';
//       gameScreen.style.display = 'block';

//       initializeBoard();
//     });