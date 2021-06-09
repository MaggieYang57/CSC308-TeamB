import React from 'react';
import { MemoryRouter } from 'react-router';
import renderer from 'react-test-renderer';
import SinglePage from '../SinglePage';
import createFetchSpy from './CreateFetchSpy';

describe('Single Page', () => {

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        removeItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
        getItem: (s) => {
          if (s === "isLoggedIn") {
            return "true";
          }
          return null;
        },
      },
      writable: true
    });

    createFetchSpy({}, [
      {
        saved_trails: ["nope"],
        rating: [2.0]
      }
    ]);

    // eslint-disable-next-line react/display-name
    jest.doMock('../components/singlepage/WeatherWidget', () => 'WeatherWidget');
    // eslint-disable-next-line react/display-name
    jest.doMock('../components/ReviewTable', () => 'ReviewTable');

    const p = document.createElement('p');
    p.id = 'rating-num';
    document.body.appendChild(p);
  })

  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter> <SinglePage /> </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
