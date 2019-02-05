import React from 'react';
import renderer from 'react-test-renderer';

import { App } from './App';

describe('App component', () => {
  it('Should renders correctly', () => {
    const fetchTickets = () => null;
    const tree = renderer.create(<App fetchTickets={fetchTickets}/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
