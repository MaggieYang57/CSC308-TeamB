import { fireEvent, render, screen } from "@testing-library/react";
import React from 'react';
import FilterButton from "../components/FilterButton";

describe('FilterButton', () => {
  test("renders correctly", async () => {
    render(<FilterButton name="test-name" />);

    expect(await screen.findByText("test-name")).toBeTruthy();
  });

  test("checkbox click works", async () => {
    const handleFilterChange = jest.fn();
    render(
      <FilterButton
        filterType="test-filter"
        onChange={handleFilterChange} 
      />
    );

    const inputEle = document.querySelector("input[type='checkbox']");
    expect(inputEle).toBeTruthy();

    fireEvent.click(inputEle);

    expect(handleFilterChange).toHaveBeenCalledTimes(1);
    expect(handleFilterChange).toHaveBeenCalledWith("test-filter");
  });
});

