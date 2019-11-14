import React from 'react'
import renderer from 'react-test-renderer'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'
import * as enzyme from 'enzyme'

enzyme.configure({ adapter: new ReactSixteenAdapter() })

import { FormFieldRadio } from './form-field-radio.component'

describe('FormFieldRadio', () => {
  const onChangeHandler = jest.fn()

  const element = (
    <FormFieldRadio
      label="text"
      icon="atom"
      onChange={onChangeHandler}
      options={[{ value: 'Tulip' }, { value: 'Rose' }]}
    />
  )

  let component

  let setStateSpy

  beforeEach(() => {
    const wrapper = enzyme.shallow(element)

    component = wrapper.instance()

    setStateSpy = jest.spyOn(component, 'setState')
  })

  it('should match snapshot', () => {
    const snapshotComponent = renderer.create(element)
    expect(snapshotComponent.toJSON()).toMatchSnapshot()
  })

  describe('component did update', () => {
    it('updates the state when the props options change', () => {
      component.componentDidUpdate(null, { options: [] })

      expect(setStateSpy).toHaveBeenCalledWith({
        options: component.props.options,
      })
    })

    it("should do nothing if the options haven't changed", () => {
      component.componentDidUpdate(null, { options: component.props.options })

      expect(setStateSpy).not.toHaveBeenCalled()
    })
  })

  it('updates the state and emits the value to the parent when an option is selected', () => {
    expect(component.state.value).toBeUndefined()
    expect(component.state.options).toEqual([])

    component.selectOption({ value: 'Tulip' })

    expect(setStateSpy).toHaveBeenCalledWith({ value: { value: 'Tulip' } })
    expect(onChangeHandler).toHaveBeenCalledWith(component.props.label, {
      value: 'Tulip',
    })
  })
})
