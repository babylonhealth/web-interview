import React from 'react'
import renderer from 'react-test-renderer'

import { TopBar } from './top-bar.component'

describe('TopBar', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<TopBar />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
