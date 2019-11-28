import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { AppointmentTypes } from '../AppointmentTypes'

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
]

test('<AppointmentTypes /> slot data NOT recieved', () => {
  const { getByTestId, queryByTestId, container } = render(
    <AppointmentTypes
      selectedAppointmentType
      selectedConsultantType
      handleChange
      availableSlots
    />
  )
  expect(container.firstChild).toMatchSnapshot()
  expect(getByTestId('appointmentTypesLoading')).toBeTruthy()
  expect(queryByTestId('appointmentTypesComponent')).toBeFalsy()
})

test('<AppointmentTypes /> slot data NOT recieved', () => {
  const { getByTestId, queryByTestId } = render(
    <AppointmentTypes
      selectedAppointmentType
      selectedConsultantType
      handleChange
      availableSlots={slots}
    />
  )

  expect(queryByTestId('appointmentTypesLoading')).toBeFalsy()
  expect(getByTestId('appointmentTypesComponent')).toBeTruthy()
})

test('<AppointmentTypes /> number items unselected', () => {
  const { getAllByTestId } = render(
    <AppointmentTypes
      handleChange
      selectedConsultantType={'gp'}
      selectedAppointmentType
      availableSlots={slots}
    />
  )
  expect(getAllByTestId('unselectedAppTypeButton').length).toBe(2)
})

test('<AppointmentTimes /> 1 button selected', () => {
  const { getAllByTestId } = render(
    <AppointmentTypes
      handleChange
      selectedConsultantType={'gp'}
      selectedAppointmentType={'audio'}
      availableSlots={slots}
    />
  )
  expect(getAllByTestId('selectedAppTypeButton').length).toBe(1)
})
