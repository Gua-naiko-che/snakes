import React from 'react';
import Board from './Board';
import renderer from 'react-test-renderer';

it('renders correctly', () => {

  const tree = renderer
    .create(<Board size={5} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});