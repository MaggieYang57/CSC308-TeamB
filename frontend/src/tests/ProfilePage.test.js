// eslint-disable-next-line no-unused-vars
import AdminUserReviewTable from "../components/AdminUserReviewTable";
import { cleanup } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import ProfilePage from '../ProfilePage';
import createFetchSpy from './CreateFetchSpy';

jest.mock('../components/AdminUserReviewTable', () => 'hi');

describe('Profile Page', () => {

  beforeEach(() => {
    createFetchSpy({}, [
      {
        '_id': 1, 
        'rating': [5, 3, 4], 
        'title':'Hike', 
        'location': 'SLO', 
        'description': 'great hike', 
        'imagesrc': 'test',
        difficulty: [5],
        saved_trails: ['lololol'],
      }
    ]);

  });

  afterEach(() => {
    cleanup();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter> <ProfilePage /> </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
