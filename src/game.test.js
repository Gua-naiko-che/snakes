import { game } from "./game";
import { Direction } from "./directions";

it('snake moves right', () => {
  const oldState = {
    snake: [[0, 1], [1, 1], [1, 2]],
    direction: Direction.right
  };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.snake).toEqual([[1, 1], [1, 2], [1, 3]]);
  expect(newState.direction).toEqual(oldState.direction);
});

it('snake moves down', () => {
  const oldState = { snake: [[0, 1], [1, 1], [1, 2]], direction: Direction.down };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.snake).toEqual([[1, 1], [1, 2], [2, 2]]);
  expect(newState.direction).toEqual(oldState.direction);
});

it('snake moves up', () => {
  const oldState = { snake: [[0, 1], [1, 1], [1, 2]], direction: Direction.up };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.snake).toEqual([[1, 1], [1, 2], [0, 2]]);
  expect(newState.direction).toEqual(oldState.direction);
});

it('snake moves left', () => {
  const oldState = { snake: [[1, 1], [2, 1], [3, 1]], direction: Direction.left };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.snake).toEqual([[2, 1], [3, 1], [3, 0]]);
  expect(newState.direction).toEqual(oldState.direction);
});

it('game over against the left wall', () => {
  const oldState = { snake: [[-1, 1]], direction: Direction.left, boardSize: 3 };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.isOver).toEqual(true);
});

it('game over against the right wall', () => {
  const oldState = { snake: [[1, 3]], direction: Direction.left, boardSize: 3 };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.isOver).toEqual(true);
});

it('game over against the upper wall', () => {
  const oldState = { snake: [[1, -1]], direction: Direction.left, boardSize: 3 };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.isOver).toEqual(true);
});

it('game over against the bottom wall', () => {
  const oldState = { snake: [[3, 1]], direction: Direction.left, boardSize: 3 };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.isOver).toEqual(true);
});

it('not game over', () => {
  const oldState = { snake: [[2, 1]], direction: Direction.left, boardSize: 3 };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.isOver).toEqual(false);
});

it('game over against itself', () => {
  const oldState = { snake: [[2, 1], [2, 1]], direction: Direction.left, boardSize: 3 };
  const newState = game(oldState, { type: "UPDATE" });
  expect(newState.isOver).toEqual(true);
});

it('next direction is different to current one: is is stored', () => {
  const oldState = {};
  const newState = game(oldState, { type: "SET_NEXT_DIRECTION", nextDirection: Direction.up });
  expect(newState.nextDirection).toEqual(Direction.up);
});