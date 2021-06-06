import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';

describe("SearchBar", () => {

  it('renders correctly', () => {
    render(<SearchBar />);

    expect(document.querySelector("input[placeholder='Search Hikes']")).toBeTruthy();

  });

  it('calls the search', async () => {
    const updateBySearch = jest.fn();
    render(<SearchBar updateBySearch={updateBySearch} />);

    userEvent.type(screen.getByRole('textbox'), 'Flowers');
    expect(await screen.getByRole('textbox')).toHaveValue('Flowers');
    await waitFor(() => {
      expect(updateBySearch).toHaveBeenCalledTimes(1);
    })

  })
});