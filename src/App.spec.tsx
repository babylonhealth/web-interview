import React from 'react'
import renderer from 'react-test-renderer'
import ReactSixteenAdapter from 'enzyme-adapter-react-16'
import * as enzyme from 'enzyme'

enzyme.configure({ adapter: new ReactSixteenAdapter() })

import App from './App'

describe('App', () => {
  const element = <App />

  let component

  const mockAvailableSlots = [
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
  ]

  const mockUsers = {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
    avatar: '',
  }

  beforeEach(() => {
    const wrapper = enzyme.shallow(element)

    component = wrapper.instance()

    component.modelService = {
      get: jest.fn(key => {
        if (key === 'availableSlots') {
          return Promise.resolve(mockAvailableSlots)
        }

        if (key === 'users') {
          return Promise.resolve(mockUsers)
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
    it('should grab the available slots from the API', () => {
      component.componentDidMount()
      expect(component.modelService.get).toHaveBeenCalledWith('availableSlots')
    })

    it('should grab the user from the API', () => {
      component.componentDidMount()
      expect(component.modelService.get).toHaveBeenCalledWith('users', 1)
    })
  })

  it('should get all available consultant types with their dates attached', () => {
    expect(component.getAvailableConsultantTypes(mockAvailableSlots)).toEqual([
      {
        type: 'string',
        value: 'GP',
        dates: [
          { type: 'date', value: '2019-11-27T10:11:00.000Z' },
          { type: 'date', value: '2019-12-01T14:16:30.000Z' },
        ],
      },
      {
        type: 'string',
        value: 'Specialist',
        dates: [{ type: 'date', value: '2019-12-01T14:16:30.000Z' }],
      },
    ])
  })
})
