import React from 'react';
import renderer from 'react-test-renderer';

import { CurrencyToggle } from './CurrencyToggle';

describe('CurrencyToggle component', () => {
  it('Should renders correctly', () => {
    const mockFunc: any = () => null;
    const tree = renderer.create(
      <CurrencyToggle
        currency="rub"
        onChange={null}
        handleBtnClassName={mockFunc}
        handleClick={mockFunc}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
