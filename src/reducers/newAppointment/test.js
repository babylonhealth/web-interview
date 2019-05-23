import { GET_AVAILABLE_SLOTS_SUCCESS } from '../../actions/newAppointment'
import reducer from './index'

describe('reducer', () => {
  it('Should set appointment selected defaults on receive availableSlots', () => {
    const mockData = [
      {
        id: 1,
        consultantType: ['gp'],
        appointmentType: ['audio', 'video'],
        time: '2019-11-27T10:11:00.000Z',
      },
      {
        id: 2,
        consultantType: ['specialist', 'gp'],
        appointmentType: ['audio', 'video'],
        time: '2019-05-23T11:39:30.316Z',
      },
      {
        id: 3,
        consultantType: ['gp'],
        appointmentType: ['audio', 'video'],
        time: '2019-05-24T10:19:30.316Z',
      },
    ]

    const state = {
      availableSlots: [],
      availableSlotsLoading: true,
      selectedConsultantType: null,
      selectedTimeSlot: null,
      selectedAppointmentType: null,
    }

    const action = {
      type: GET_AVAILABLE_SLOTS_SUCCESS,
      data: mockData,
    }

    expect(reducer(state, action)).toEqual({
      availableSlots: mockData,
      availableSlotsLoading: false,
      selectedConsultantType: 'gp',
      selectedTimeSlot: mockData[0],
      selectedAppointmentType: 'audio',
    })
  })
})
