import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { NewAppointmentHeader } from '../NewAppointmentHeader'
import { API_ENDPOINT } from '../../config'

afterEach(cleanup)

const user = {
  id: 1,
  firstName: 'Jane',
  lastName: 'Doe',
  dateOfBirth: '1971-02-03',
}

test('<NewAppointmentHeader>', () => {
  const { queryByTestId, getByTestId, container } = render(
    <NewAppointmentHeader user userLoading />
  )
  expect(container.firstChild).toMatchSnapshot()

  expect(getByTestId('newAppointmentHeader')).toBeTruthy()
  expect(getByTestId('newAppointmentHeader').textContent).toBe(
    'New appointment'
  )

  expect(queryByTestId('userPanel')).toBeTruthy()

  expect(queryByTestId('userAvatar')).toBeTruthy()
  expect(user.dateOfBirth).toEqual('1971-02-03')
  expect(queryByTestId('userName')).toBeTruthy()
  expect(user.firstName).toEqual('Jane')
})
