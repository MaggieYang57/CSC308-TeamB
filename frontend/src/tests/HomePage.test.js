import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import HomePage from '../HomePage';

it('renders correctly', () => {
  const hikes  = [
    {
      '_id': 1, 
      'rating': [5, 3, 4], 
      'title':'Hike 1', 
      'location': 'SLO', 
      'description': 'great hike', 
      'imagesrc': 'test' 
    },
    {
      '_id': 2, 
      'rating': [5, 3, 4], 
      'title':'Hike 2', 
      'location': 'BILL', 
      'description': 'Amazing getaway to the green beyond.', 
      'imagesrc': 'hills' 
    },
    {
      '_id': 3, 
      'rating': [5, 3, 4], 
      'title':'Hike 3', 
      'location': 'Avila', 
      'description': 'Great hike for destressing', 
      'imagesrc': 'Tall hike' 
    }
  ]
  const tree = renderer
    .create(<MemoryRouter> <HomePage hikeList={hikes} /> </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});