import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { AppointmentTimeButton } from '../AppointmentTimeButton'

afterEach(() => {
  cleanup()
  console.error.mockClear()
})

console.error = jest.fn()

const slot = {
  id: 1,
  consultantType: ['gp'],
  appointmentType: ['audio', 'video'],
  time: '2019-11-27T10:11:00.000Z',
}

const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

test('<AppointmentTimeButton />', () => {
  const { container } = render(<AppointmentTimeButton />)
  expect(container.firstChild).toMatchSnapshot()
  expect(console.error).not.toHaveBeenCalled()
})

test('<AppointmentTimeButton /> with slot', () => {
  const { getByTestId } = render(
    <AppointmentTimeButton slot={slot} monthNames={monthNames} />
  )
  expect(console.error).not.toBeCalled()
  expect(slot.id).toEqual(1)
  expect(slot.consultantType).toEqual(['gp'])
  expect(slot.appointmentType).toEqual(['audio', 'video'])
  expect(slot.time).toEqual('2019-11-27T10:11:00.000Z')
  expect(getByTestId('unselectedTimeButton')).toBeTruthy()
})
