import { cleanup } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import HikeFinder from '../HikeFinder';
// eslint-disable-next-line no-unused-vars
import FilterBar from '../components/FilterBar'

jest.mock('../components/FilterBar', () => 'FilterBar');

describe('Hike Finder', () => {

  beforeEach(() => {

  });

  afterEach(() => {
    cleanup();
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter> <HikeFinder hikeList={[]} /> </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
