import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './Board';
import * as serviceWorker from './serviceWorker';
import { getNewSnake, isGameOver } from "./game";
import { createStore } from "redux";

const food = [3, 3];
const BOARD_SIZE = 10;
const SNAKE_SPEED = 150;

const snakeApp = (state = {}, action) => {
  return {
    snake: getNewSnake(state.snake, action),
  };
}

const store = createStore(snakeApp);
store.subscribe(() => ReactDOM.render(
  <Board size={BOARD_SIZE} snake={getSnakeFromStore()} food={food} />,
  document.getElementById('root'))
);

const getSnakeFromStore = () => {
  const state = store.getState();
  console.log(state);
  return state.snake.body;
}

(function gameLoop() {
  store.dispatch({ type: "MOVE" });

  if (!isGameOver(getSnakeFromStore(), BOARD_SIZE)) {
    setTimeout(gameLoop, SNAKE_SPEED);
  }
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();