import renderer from 'react-test-renderer';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { HikeCardList } from '../components/HikeCardSmall';

describe("HikeCardSmall", () => {

  it('renders correctly', () => {
    const mockHike = {
      '_id': 1, 
      'rating': [5, 3, 4], 
      'title':'Hike', 
      'location': 'SLO', 
      'description': 'great hike', 
      'imagesrc': 'test' 
    }

    const tree = renderer
      .create(<MemoryRouter> <HikeCardList  hike={mockHike} /> </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})