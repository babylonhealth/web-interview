import React from 'react'
import { shallow, configure } from 'enzyme'

import { App } from './App'

import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('App', () => {
  let app

  const props = {
    users: [],
    usersLoading: true,
    selectedUser: null,
    availableSlots: [],
    availableSlotsLoading: true,
    selectedConsultantType: null,
    selectedTimeSlot: null,
    selectedAppointmentType: null,
    appointmentNotes: '',
    postingAppointment: false,
    getUsers: jest.fn(),
    getAvailableSlots: jest.fn(),
  }

  let dispatch = jest.fn()

  beforeEach(() => {
    app = shallow(<App {...props} dispatch={dispatch} />)
  })

  afterEach(() => {
    dispatch.mockReset()
  })

  it('renders without crashing', () => {
    expect(app.find('.app').length).toEqual(1)
  })
})
