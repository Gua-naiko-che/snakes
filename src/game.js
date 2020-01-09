import { Direction } from "./directions";
import { isPointInArray } from "./geometry";

const START_SNAKE = [
  [0, 0],
  [0, 1],
  [1, 1],
  [1, 2],
  [2, 2],
];

export function getNewSnake(snake = { body: START_SNAKE, direction: Direction.right }, action) {
  if (action.type !== "MOVE") return snake;

  const body = snake.body;
  const direction = snake.direction;
  const oldHead = body[body.length - 1];

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

  return { ...snake, body: [...body.slice(1), newHead] };
}

export function isGameOver(snake, boardSize) {
  const head = snake[snake.length - 1];

  return head[0] < 0
    || head[1] < 0
    || head[0] > boardSize - 1
    || head[1] > boardSize - 1
    || isPointInArray(head, snake.slice(0, -1));
}