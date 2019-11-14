import React from 'react'
import renderer from 'react-test-renderer'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'
import * as enzyme from 'enzyme'

enzyme.configure({ adapter: new ReactSixteenAdapter() })

import App from './App'

describe('App', () => {
  const element = <App />

  let component

  beforeEach(() => {
    const wrapper = enzyme.shallow(element)

    component = wrapper.instance()

    component.modelService = {
      get: jest.fn(key => {
        if (key === 'availableSlots') {
          return Promise.resolve([
            {
              id: 1,
              consultantType: ['GP'],
              appointmentType: ['Audio', 'Video'],
              time: '2019-11-27T10:11:00.000Z',
            },
            {
              id: 2,
              consultantType: ['Specialist', 'GP'],
              appointmentType: ['Audio', 'Video'],
              time: '2019-12-01T14:16:30.000Z',
            },
          ])
        }

        if (key === 'users') {
          return Promise.resolve({
            id: 1,
            firstName: 'Jane',
            lastName: 'Doe',
            avatar: '',
          })
        }
      }),
      post: jest.fn(),
    }
  })

  it('should match snapshot', () => {
    const snapshotComponent = renderer.create(element)
    expect(snapshotComponent.toJSON()).toMatchSnapshot()
  })

  describe('Component Did Mount', () => {
    it('should update the state with the available slots from the API', () => {
      component.componentDidMount()
    })
  })
})
