import React from 'react'
import renderer from 'react-test-renderer'

import { Icon } from './icon.component'

describe('Icon', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <Icon alias="burger" modifier="no-tomato" />
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
