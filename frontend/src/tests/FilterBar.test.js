import React from 'react';
import renderer from 'react-test-renderer';
import FilterBar from '../components/FilterBar';

describe("FilterBar", () => {

  it('renders correctly', () => {
    const tree = renderer
      .create(<FilterBar />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})