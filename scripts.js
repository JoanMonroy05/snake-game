// HTML elements
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOverSign = document.getElementById('gameOver');

// Game settings
const boardSize = 10;
const gameSpeed = 100; 
const squereTypes = {
    emptySquare: 0,
    snakeSquare: 1,
    foodSquare: 2,
};
const directions = {
    ArrowUp: -10,
    ArrowDown: 10,
    ArrowLeft: -1,
    ArrowRight: 1,
};

// Game variables
let snake;
let score;
let direction;
let boardSquares;
let emptySquares;
let moveInterval;

