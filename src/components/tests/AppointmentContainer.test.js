import React from 'react'
import { render, cleanup, waitForElement } from '@testing-library/react'
import AppointmentContainer from '../AppointmentContainer'

global.fetch = require('jest-fetch-mock')

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

const user = {
  avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAA',
  dateOfBirth: '1971-02-03',
  firstName: 'Jane',
  lastName: 'Doe',
}

const availableSlots = [
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

console.error = jest.fn()

test('<AppointmentContainer>', async () => {
  const { getByTestId, debug, queryByTestId, container } = render(
    <AppointmentContainer />
  )
  expect(container.firstChild).toMatchSnapshot()

  expect(queryByTestId('navigationBarComponent')).toBeTruthy()
  expect(queryByTestId('babylonLogo')).toBeTruthy()
  expect(queryByTestId('appointmentForm')).toBeTruthy()

  expect(queryByTestId('appointmentNotesComponent')).toBeTruthy()
})

test('<AppointmentContainer> available slots fetch', async () => {
  fetch.mockResponseOnce(JSON.stringify(availableSlots))

  const { getByTestId, debug } = render(<AppointmentContainer />)

  await waitForElement(() => getByTestId('consultantTypesComponent'))
  expect(getByTestId('consultantTypesComponent')).toBeTruthy()
})

test('<AppointmentContainer> user fetch', async () => {
  fetch.mockResponseOnce(JSON.stringify(user))

  const { getByTestId } = render(<AppointmentContainer />)

  await waitForElement(() => getByTestId('userName'))
  expect(getByTestId('userName')).toBeTruthy()
})
