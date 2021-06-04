import { render, screen } from "@testing-library/react";
import App from "../App";
import React from 'react';

test("renders SLO Hikes App", () => {
  render(<App />)
  const linkElement = screen.getAllByRole('button', { name: 'FIND A HIKE NOW' })[0];
  expect(linkElement).toBeInTheDocument();
});
