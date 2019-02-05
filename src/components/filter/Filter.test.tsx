import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import Filter from './Filter'

describe('Filter components', () => {
  it('Should renders correctly', () => {
    const renderer = createRenderer()
    const tree = renderer.render(<Filter />)

    expect(tree).toMatchSnapshot()
  })
})
