import { Direction } from "./directions";
import { isPointInArray } from "./geometry";

const START_SNAKE = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 2],
  [2, 2],
];

export function game(state = { snake: START_SNAKE, direction: Direction.right }, action) {
  if (action.type === "UPDATE") {
    return {
      ...state,
      snake: getNewSnake(state.snake, state.direction),
      isOver: isGameOver(state.snake, state.boardSize)
    };
  } else if (action.type === "SET_NEXT_DIRECTION") {
    console.log(action.nextDirection);
    return { ...state, nextDirection: action.nextDirection };
  }

  return state;
}

function getNewSnake(snake, direction) {
  const oldHead = snake[snake.length - 1];

  let newHead;
  if (direction === Direction.up) {
    newHead = [oldHead[0] - 1, oldHead[1]];
  }
  else if (direction === Direction.down) {
    newHead = [oldHead[0] + 1, oldHead[1]];
  }
  else if (direction === Direction.left) {
    newHead = [oldHead[0], oldHead[1] - 1];
  }
  else if (direction === Direction.right) {
    newHead = [oldHead[0], oldHead[1] + 1];
  }

  return [...snake.slice(1), newHead];
}

export function isGameOver(snake, boardSize) {
  const head = snake[snake.length - 1];

  return head[0] < 0
    || head[1] < 0
    || head[0] > boardSize - 1
    || head[1] > boardSize - 1
    || isPointInArray(head, snake.slice(0, -1));
}