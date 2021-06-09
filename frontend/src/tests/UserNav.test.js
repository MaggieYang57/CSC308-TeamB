import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react';
import UserNavBar from '../components/navbars/UserNavBar';
import renderer from 'react-test-renderer';

test("clicking on HikeFinder takes you to the HikeFinder page", () => {
  render(<UserNavBar />)
  fireEvent.click(screen.getByRole('link', { name: 'Profile'}))
})

it('renders correctly', () => {
  const tree = renderer
    .create(<UserNavBar/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});