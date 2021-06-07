import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AdminUserReviewTable from '../components/AdminUserReviewTable';

// function createFetchSpy(fetchRes, jsonRes) {
//     const fetchSpy = jest.spyOn(window, 'fetch')
//     const jsonSpy = jest.fn();
    
//     fetchSpy.mockReturnValue(new Promise((resolve, reject) => {
//       resolve({
//         json: jsonSpy,
//         ...fetchRes
//       });
//     }))

//     jsonSpy.mockReturnValue(new Promise((resolve, reject) => {
//       resolve(jsonRes);
//     }))

//     return [fetchSpy, jsonSpy];
// }

describe("AdminUserReviewTable", () => {
  // let fetchSpy;
  // let jsonFn;

  // beforeEach(() => {
  //   [fetchSpy, jsonFn] = createFetchSpy({
  //       ok: true,
  //     }, [{ test: 'hello' }])
  // })

  afterEach(() => {
    cleanup();
  });

  it('renders the empty table without crashing', async () => {
    render(<AdminUserReviewTable />)

    expect(screen.getByText('No reviews yet.')).toBeTruthy();
  });

  // it('renders the table without crashing', () => {
  //   render(<AdminUserReviewTable />)

  //   expect(screen.getByText('No reviews yet.')).toBeTruthy();
  // });
});