import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ConsultantTypes } from '../ConsultantTypes'

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

test('<ConsultantTypes /> slot data NOT recieved', () => {
  const { getByTestId, queryByTestId, container } = render(
    <ConsultantTypes
      selectedAppointmentType
      selectedConsultantType
      handleChange
      availableSlots
    />
  )
  expect(container.firstChild).toMatchSnapshot()
  expect(getByTestId('consultantTypesLoading')).toBeTruthy()
  expect(queryByTestId('consultantTypesComponent')).toBeFalsy()
})

test('<ConsultantTypes /> slot data NOT recieved', () => {
  const { getByTestId, queryByTestId } = render(
    <ConsultantTypes
      selectedAppointmentType
      selectedConsultantType
      handleChange
      availableSlots={slots}
    />
  )

  expect(queryByTestId('consultantTypesLoading')).toBeFalsy()
  expect(getByTestId('consultantTypesComponent')).toBeTruthy()
})
