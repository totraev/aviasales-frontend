import React from 'react'
import renderer from 'react-test-renderer'

import Checkbox from './Checkbox'

describe('Checkbox component', () => {
  it('Should renders correctly', () => {
    const tree = renderer
      .create(<Checkbox id="test" stops={1} value={true} onClick={null} onUncheckOther={null} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
