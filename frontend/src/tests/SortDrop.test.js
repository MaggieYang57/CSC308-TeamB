import React from 'react';
import { render } from '@testing-library/react';
import SortDrop from '../components/SortDrop';

describe("SortDrop", () => {

  it("renders correctly", () => {
    render(<SortDrop />)

    expect(document.querySelector("div[id='sort-drop']")).toBeTruthy();
  });
});