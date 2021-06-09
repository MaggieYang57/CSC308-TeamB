import React from 'react';
import { render, screen } from '@testing-library/react';
import SortDrop from '../components/SortDrop';
import userEvent from '@testing-library/user-event';

describe("SortDrop", () => {

  it("renders correctly", () => {
    const handleFilterChange = jest.fn();
    render(<SortDrop onChange={handleFilterChange}/>)

    const dropDown = document.querySelector("select[name='difficulty']");
    expect(dropDown).toBeTruthy();
  });

  it("changes to Low to high successfully", () => {
    const handleFilterChange = jest.fn();
    render(<SortDrop onChange={handleFilterChange}/>)

    const dropDown = document.querySelector("select[name='difficulty']");
    expect(dropDown).toBeTruthy();

    userEvent.selectOptions(screen.getByRole('combobox'), '2')

    expect(handleFilterChange).toBeCalledTimes(1);
    expect(screen.getByRole('option', { name: 'None'}).selected).toBe(false);
    expect(screen.getByRole('option', { name: 'Difficulty: Low to High'}).selected).toBe(true);
    expect(screen.getByRole('option', { name: 'Difficulty: High to Low'}).selected).toBe(false);
  });

  it("changes to Hight to Low successfully", () => {
    const handleFilterChange = jest.fn();
    render(<SortDrop onChange={handleFilterChange}/>)

    const dropDown = document.querySelector("select[name='difficulty']");
    expect(dropDown).toBeTruthy();

    userEvent.selectOptions(screen.getByRole('combobox'), '1')

    expect(handleFilterChange).toBeCalledTimes(1);
    expect(screen.getByRole('option', { name: 'None'}).selected).toBe(false);
    expect(screen.getByRole('option', { name: 'Difficulty: Low to High'}).selected).toBe(false);
    expect(screen.getByRole('option', { name: 'Difficulty: High to Low'}).selected).toBe(true);
  })
});