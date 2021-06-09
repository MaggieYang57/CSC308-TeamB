import renderer from 'react-test-renderer';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { HikeCardList } from "../components/HikeCardList";

describe("HikeCardList", () => {

  it('renders correctly', () => {
    const mockHike = {
      '_id': 1, 
      'rating': [5, 3, 4], 
      'title':'Hike', 
      'location': 'SLO', 
      'description': 'great hike', 
      'difficulty': [1, 3, 5],
      'imagesrc': 'test' 
    }

    const tree = renderer
      .create(<MemoryRouter> <HikeCardList hike={mockHike} /> </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

})