import React from 'react'
import renderer from 'react-test-renderer'

import { Group } from './group.component'

describe('Group', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <Group>
        <span className="whatever">Some text, yeh!</span>
        <button className="whatever__button">big CTA</button>
      </Group>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
