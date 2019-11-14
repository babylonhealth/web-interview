import React from 'react'
import renderer from 'react-test-renderer'

import { Form } from './form.component'

describe('Form', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<Form />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
