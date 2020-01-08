import { Direction } from "./directions";

export function getNewSnake(snake, direction) {
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