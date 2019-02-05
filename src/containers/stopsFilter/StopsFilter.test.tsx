import React from 'react';
import renderer from 'react-test-renderer';

import { StopsFilter } from './StopsFilter';

describe('StopsFilter component', () => {
  it('Should renders correctly', () => {
    const mockFunc: any = () => null;
    const tree = renderer.create(
      <StopsFilter
        stopsList={[true, false, false, true]}
        handleClick={mockFunc}
        handleUncheckOther={mockFunc}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
