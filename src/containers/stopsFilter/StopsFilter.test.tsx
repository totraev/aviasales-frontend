import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow'

import { StopsFilter } from './StopsFilter'

describe('StopsFilter component', () => {
  it('Should renders correctly', () => {
    const renderer = createRenderer()
    const mockFunc: any = () => null

    const tree = renderer.render(
      <StopsFilter
        stopsList={[true, false, false, true]}
        handleChange={mockFunc}
        handleUncheckOther={mockFunc}
        handleChangeAll={null}
        toggleAllCheckboxes={null}
        toggleCurrentCheckbox={null}
        toggleOnlyCurrentCheckbox={null}
      />
    )

    expect(tree).toMatchSnapshot()
  })
})
