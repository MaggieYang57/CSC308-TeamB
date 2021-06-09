import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import LoginPage from '../LoginPage';

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter> <LoginPage /> </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});