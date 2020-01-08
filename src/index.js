import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import * as serviceWorker from './serviceWorker';
import { getNewSnake } from './game';
import { Direction } from './directions';

const START_SNAKE = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 2],
  [2, 2],
];
const food = [3, 3];
const BOARD_SIZE = 10;
const SNAKE_SPEED = 150;

let snake = START_SNAKE;

(function gameLoop() {
  snake = getNewSnake(snake, Direction.right);
  ReactDOM.render(<Board size={BOARD_SIZE} snake={snake} food={food} />, document.getElementById('root'));
  setTimeout(gameLoop, SNAKE_SPEED);
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();