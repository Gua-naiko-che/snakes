import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import { game, isGameOver } from "./game";
import { createStore } from "redux";
import { directionByKeyCode } from "./directions";

const food = [3, 3];
const BOARD_SIZE = 10;
const SNAKE_SPEED = 150;

const store = createStore(game);
store.subscribe(() => ReactDOM.render(
  <Board size={BOARD_SIZE} snake={getSnakeFromStore()} food={food} />,
  document.getElementById('root'))
);

document.onkeydown = e => {
  e = e || window.event;
  const nextDirection = directionByKeyCode[e.keyCode];
  if (nextDirection) {
    store.dispatch({ type: "SET_NEXT_DIRECTION", nextDirection })
    e.preventDefault();
  }
}

const getSnakeFromStore = () => store.getState().snake;

(function gameLoop() {
  store.dispatch({ type: "UPDATE" });

  if (!isGameOver(getSnakeFromStore(), BOARD_SIZE)) {
    setTimeout(gameLoop, SNAKE_SPEED);
  }
})();