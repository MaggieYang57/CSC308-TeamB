import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import SignupSuccess from '../components/SignupSuccess';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter> <SignupSuccess /> </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});