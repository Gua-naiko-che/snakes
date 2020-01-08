import { getNewSnake, isGameOver } from "./game";
import { Direction } from "./directions";

it('snake moves right', () => {
  const snake = [[0, 1], [1, 1], [1, 2]];
  const direction = Direction.right;
  const newSnake = getNewSnake(snake, direction);
  expect(newSnake).toEqual([[1, 1], [1, 2], [1, 3]]);
});

it('snake moves down', () => {
  const snake = [[0, 1], [1, 1], [1, 2]];
  const direction = Direction.down;
  const newSnake = getNewSnake(snake, direction);
  expect(newSnake).toEqual([[1, 1], [1, 2], [2, 2]]);
});

it('snake moves up', () => {
  const snake = [[0, 1], [1, 1], [1, 2]];
  const direction = Direction.up;
  const newSnake = getNewSnake(snake, direction);
  expect(newSnake).toEqual([[1, 1], [1, 2], [0, 2]]);
});

it('snake moves left', () => {
  const snake = [[1, 1], [2, 1], [3, 1]];
  const direction = Direction.left;
  const newSnake = getNewSnake(snake, direction);
  expect(newSnake).toEqual([[2, 1], [3, 1], [3, 0]]);
});

it('game over against the left wall', () => {
  const snake = [[-1, 1]];
  const boardSize = 3;
  const result = isGameOver(snake, boardSize);
  expect(result).toEqual(true);
});

it('game over against the right wall', () => {
  const snake = [[1, 3]];
  const boardSize = 3;
  const result = isGameOver(snake, boardSize);
  expect(result).toEqual(true);
});

it('game over against the upper wall', () => {
  const snake = [[1, -1]];
  const boardSize = 3;
  const result = isGameOver(snake, boardSize);
  expect(result).toEqual(true);
});

it('game over against the bottom wall', () => {
  const snake = [[3, 1]];
  const boardSize = 3;
  const result = isGameOver(snake, boardSize);
  expect(result).toEqual(true);
});

it('not game over', () => {
  const snake = [[2, 1]];
  const boardSize = 3;
  const result = isGameOver(snake, boardSize);
  expect(result).toEqual(false);
});

it('game over against itself', () => {
  const snake = [[2, 1], [2, 1]];
  const boardSize = 3;
  const result = isGameOver(snake, boardSize);
  expect(result).toEqual(true);
});