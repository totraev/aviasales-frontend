import React from 'react';
import renderer from 'react-test-renderer';

import Filter from './Filter';

describe('Filter components', () => {
  it('Should renders correctly', () => {
    const tree = renderer.create(<Filter />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
