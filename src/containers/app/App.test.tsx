import React from 'react';
import { Provider } from 'react-redux';
import { createRenderer } from 'react-test-renderer/shallow';

import { App } from './App';

describe('App component', () => {
  it('Should renders correctly', () => {
    const renderer = createRenderer();
    const fetchTickets = () => null;

    const tree = renderer.render(
      <App fetchTickets={fetchTickets}/>,
    );

    expect(tree).toMatchSnapshot();
  });
});
