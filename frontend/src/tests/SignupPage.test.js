import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import SignupPage from '../SignupPage';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter> <SignupPage /> </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});