import React from 'react';
import renderer from 'react-test-renderer';
import AdminNavBar from './AdminNavBar';

it('renders correctly', () => {
  const tree = renderer
    .create(<AdminNavBar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});