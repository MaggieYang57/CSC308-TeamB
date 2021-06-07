import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ManagePage from '../ManagePage';
import AdminUserReviewTable from '../components/AdminUserReviewTable';



function createFetchSpy(fetchRes, jsonRes) {
    const fetchSpy = jest.spyOn(window, 'fetch')
    const jsonSpy = jest.fn();
    
    fetchSpy.mockReturnValue(new Promise((resolve, reject) => {
      resolve({
        json: jsonSpy,
        ...fetchRes
      });
    }))

    jsonSpy.mockReturnValue(new Promise((resolve, reject) => {
      resolve(jsonRes);
    }))

    return [fetchSpy, jsonSpy];
}

describe("Manage Page", () => {
  let fetchSpy;
  let jsonFn;

  beforeAll(() => {
    jest.mock(AdminUserReviewTable, () => () => <div id="Mock">Mocked</div>)
  })

  beforeEach(() => {
    [fetchSpy, jsonFn] = createFetchSpy({
        ok: true,
      }, [{ test: ['hello'] }]);
  })

  afterEach(() => {
    cleanup();
  });

  it('renders without crashing', async () => {
    render(<ManagePage />)

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    })

    expect(jsonFn).toHaveBeenCalledTimes(1);
  })

});