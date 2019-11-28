import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { AppointmentTimes } from '../AppointmentTimes'

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

const slots = [
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
    time: '2019-12-01T14:16:30.000Z',
  },
  {
    id: 2,
    consultantType: ['specialist', 'gp'],
    appointmentType: ['audio', 'video'],
    time: '2019-12-01T14:16:30.000Z',
  },
]

test('<AppointmentTimes /> consultant type NOT selected', () => {
  const { getByTestId, queryByTestId, container } = render(
    <AppointmentTimes
      handleChange
      selectedConsultantType
      selectedAppointmentTime
      availableSlots={slots}
    />
  )
  expect(container.firstChild).toMatchSnapshot()
  expect(getByTestId('appointmentTimesLoading')).toBeTruthy()
  expect(queryByTestId('appointmentTimesComponent')).toBeFalsy()
})

test('<AppointmentTimes /> consultant type selected', () => {
  const { getByTestId, queryByTestId } = render(
    <AppointmentTimes
      handleChange
      selectedConsultantType={'gp'}
      selectedAppointmentTime
      availableSlots={slots}
    />
  )

  expect(queryByTestId('appointmentTimesLoading')).toBeFalsy()
  expect(getByTestId('appointmentTimesComponent')).toBeTruthy()
})

test('<AppointmentTimes /> number items unselected', () => {
  const { getAllByTestId } = render(
    <AppointmentTimes
      handleChange
      selectedConsultantType={'gp'}
      selectedAppointmentTime
      availableSlots={slots}
    />
  )
  expect(getAllByTestId('unselectedTimeButton').length).toBe(3)
})

test('<AppointmentTimes /> 1 button selected', () => {
  const { getAllByTestId } = render(
    <AppointmentTimes
      handleChange
      selectedConsultantType={'gp'}
      selectedAppointmentTime={'2019-11-27T10:11:00.000Z'}
      availableSlots={slots}
    />
  )
  expect(getAllByTestId('selectedTimeButton').length).toBe(1)
})
