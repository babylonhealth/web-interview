import React from 'react'
import renderer from 'react-test-renderer'

import { BottomBar } from './bottom-bar.component'

describe('BottomBar', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<BottomBar />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
