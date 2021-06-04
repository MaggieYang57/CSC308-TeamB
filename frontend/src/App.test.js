/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import React from 'react';

test("renders SLO Hikes App", () => {
  render(<App />)
  const linkElement = screen.getAllByRole('button', { name: 'FIND A HIKE NOW' })[0];
  expect(linkElement).toBeInTheDocument();
});

// test("clicking on Find a Hike Now button takes you to the HikeFinder page", () => {
//   render(<App />)
//   fireEvent.click(screen.getByRole('button', { name: 'FIND A HIKE NOW'}))
// })