import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { AppointmentTimeMobButton } from '../AppointmentTimeMobButton'

afterEach(cleanup)

console.error = jest.fn()

const slot = {
  id: 1,
  consultantType: ['gp'],
  appointmentType: ['audio', 'video'],
  time: '2019-11-27T10:11:00.000Z',
}

test('<AppointmentTimeMobButton />', () => {
  const { container } = render(<AppointmentTimeMobButton />)
  expect(container.firstChild).toMatchSnapshot()
  expect(console.error).not.toBeCalled()
})

test('<AppointmentTimeMobButton /> with slot', () => {
  const { debug } = render(<AppointmentTimeMobButton slot={slot} />)
  expect(console.error).not.toBeCalled()
  expect(slot.id).toEqual(1)
  expect(slot.consultantType).toEqual(['gp'])
  expect(slot.appointmentType).toEqual(['audio', 'video'])
  expect(slot.time).toEqual('2019-11-27T10:11:00.000Z')
})
