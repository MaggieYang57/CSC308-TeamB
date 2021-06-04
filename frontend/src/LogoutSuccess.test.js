import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import LogoutSuccess from "./components/LogoutSuccess";

it('renders correctly', () => {
  const tree = renderer
    .create(<MemoryRouter> <LogoutSuccess /> </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});