import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import AppointmentForm from '../AppointmentForm'

afterEach(() => {
  cleanup()
})

const submit = jest.fn()

test('<AppointmentForm>', async () => {
  const { getByTestId, queryByTestId, container } = render(
    <AppointmentForm
      availableSlots
      availableAppTypes
      availableSlotsLoading
      user
      handleSubmit={submit}
    />
  )
  expect(container.firstChild).toMatchSnapshot()

  expect(queryByTestId('appointmentForm')).toBeTruthy()
  expect(queryByTestId('appointmentNotesComponent')).toBeTruthy()

  queryByTestId('appointmentNotesTextArea').value = ''
  fireEvent.change(queryByTestId('appointmentNotesTextArea'))

  fireEvent.submit(getByTestId('appointmentForm'))
  expect(submit).toHaveBeenCalled()
  expect(submit).toHaveBeenCalledTimes(1)

  // expect(submit).toHaveBeenCalledWith({
  //   selectedConsultantType: 'gp',
  //   selectedAppointmentTime: '',
  //   selectedAppointmentType: '',
  //   appointmentNotes: '',
  // })
})
