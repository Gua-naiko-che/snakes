import React from 'react';
import Board from './Board';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const snake = [[0, 1], [1, 1], [1, 2]];
  const tree = renderer
    .create(<Board size={5} snake={snake} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});