import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ManagePage from '../ManagePage';
import renderer from 'react-test-renderer';
import createFetchSpy from './CreateFetchSpy';
import AdminUserReviewTable from '../components/AdminUserReviewTable';

jest.mock('../components/AdminUserReviewTable', () => 'div');

describe("Manage Page", () => {
  let fetchSpy;
  let jsonFn;

  beforeEach(() => {
    [fetchSpy, jsonFn] = createFetchSpy();
  });

  afterEach(() => {
    cleanup();
  });

  it('snapshot test', () => {
    const tree = renderer
      .create(<ManagePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', async () => {
    render(<ManagePage />)

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledTimes(1);
    })

    expect(jsonFn).toHaveBeenCalledTimes(1);
  })

});