import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { AppointmentNotes } from '../AppointmentNotes'

afterEach(cleanup)

test('AppointmentNotes>', () => {
  const spy = jest.fn()
  const { queryByTestId, container } = render(
    <AppointmentNotes handleChange={spy} appointmentNotesError />
  )
  expect(container.firstChild).toMatchSnapshot()
  expect(queryByTestId('appointmentNotesHeader')).toBeTruthy()
  expect(queryByTestId('appointmentNotesTextArea')).toBeTruthy()
})
