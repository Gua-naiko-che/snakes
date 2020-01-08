import { getNewSnake } from "./game";
import { Direction } from "./directions";

it('snake moves right', () => {
  const snake = [[0, 1], [1, 1], [1, 2]];
  const direction = Direction.right;
  const newSnake = getNewSnake(snake, direction);
  expect(newSnake).toEqual([[1, 1], [1, 2], [1, 3]])
});

it('snake moves down', () => {
  const snake = [[0, 1], [1, 1], [1, 2]];
  const direction = Direction.down;
  const newSnake = getNewSnake(snake, direction);
  expect(newSnake).toEqual([[1, 1], [1, 2], [2, 2]])
});

it('snake moves up', () => {
  const snake = [[0, 1], [1, 1], [1, 2]];
  const direction = Direction.up;
  const newSnake = getNewSnake(snake, direction);
  expect(newSnake).toEqual([[1, 1], [1, 2], [0, 2]])
});

it('snake moves left', () => {
  const snake = [[1, 1], [2, 1], [3, 1]];
  const direction = Direction.left;
  const newSnake = getNewSnake(snake, direction);
  expect(newSnake).toEqual([[2, 1], [3, 1], [3, 0]])
});