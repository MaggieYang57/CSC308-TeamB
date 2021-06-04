import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import ReviewSuccess from './ReviewSuccess';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter> <ReviewSuccess /> </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});