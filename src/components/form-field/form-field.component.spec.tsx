import React from 'react'
import renderer from 'react-test-renderer'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'
import * as enzyme from 'enzyme'

enzyme.configure({ adapter: new ReactSixteenAdapter() })

import { FormField } from './form-field.component'

describe('FormField', () => {
  const onChangeHandler = jest.fn()
  const element = (
    <FormField
      type="input"
      label="text"
      icon="atom"
      onChange={onChangeHandler}
    />
  )

  let component

  beforeEach(() => {
    const wrapper = enzyme.shallow(element)

    component = wrapper.instance()
  })

  it('should match snapshot', () => {
    const snapshotComponent = renderer.create(element)
    expect(snapshotComponent.toJSON()).toMatchSnapshot()
  })

  it('updates the state and emits the value to the parent when an option is selected', () => {
    expect(component.state.value).toBeUndefined()

    component.handleChange({ target: { value: 'new value' } })

    expect(component.state.value).toBe('new value')
    expect(onChangeHandler).toHaveBeenCalledWith('text', 'new value')
  })
})
