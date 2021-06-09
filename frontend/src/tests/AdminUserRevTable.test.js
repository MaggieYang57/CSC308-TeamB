import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import AdminUserReviewTable from '../components/AdminUserReviewTable';
import createFetchSpy from './CreateFetchSpy';
import { MemoryRouter } from 'react-router';
import { act } from 'react-dom/test-utils';

describe("AdminUserReviewTable", () => {

  beforeEach(() => {
    createFetchSpy({
        ok: true,
      }, [])
  })

  afterEach(() => {
    cleanup();
  });

  it('renders the empty table without crashing', async () => {
    await act(async () => {
      await render(<MemoryRouter> <AdminUserReviewTable /> </MemoryRouter>);
    });;

    expect(await screen.getByText('No reviews yet.')).toBeTruthy();
  });

  it('renders the table without crashing', async () => {
    createFetchSpy({}, [
      {
        date: '102020-21881-1'
      },
      {
        date: '1020-218-1222'
      }
    ])

    await act(async() => {
      await render(<MemoryRouter><AdminUserReviewTable /></MemoryRouter>);
    });
    
    expect(document.querySelectorAll('tr').length).toBe(2);
  });

  it('renders the table with activities', async () => {
    createFetchSpy({}, [
      {
        date: '102020-21881-1',
        dog_friendly: true,
        free_parking: true,
        horseback_riding: true,
        mountain_biking: true,
      },
    ])

    await act(async() => {
      await render(<MemoryRouter><AdminUserReviewTable /></MemoryRouter>);
    });
    
    expect(document.querySelector('tr').innerHTML.includes("biking")).toBeTruthy();
  });
});