import React from 'react'
import renderer from 'react-test-renderer'

import { BuyButton } from './BuyButton'

describe('BuyButton component', () => {
  it('Should renders correctly', () => {
    const tree = renderer
      .create(<BuyButton currency="rub" currencyPrice={1} price={500} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
