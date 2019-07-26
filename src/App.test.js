import React from 'react'
import ReactDOM from 'react-dom'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import axiosMock from 'axios'
import App from './App'

afterEach(cleanup)

it('fetch and display date', async () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
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
    ],
  })
  const { getByTestId, getByText } = render(<App />)
  const resolvedSlot = await waitForElement(() => getByTestId('slot'))
  expect(resolvedSlot).toHaveTextContent('Nov 27, 10:11 amDec 01, 2:16 pm')
  expect(axiosMock.get).toHaveBeenCalledTimes(2)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

it('show the note when it has value nothing when it has not', () => {
  const { getByTestId } = render(<App />)
  const input = getByTestId('symptoms')
  expect(input.value).toBe('')
  fireEvent.change(input, { target: { value: 'cold' } })
  expect(input.value).toBe('cold')
})

it('to be on the page and defined', () => {
  const { getByTestId } = render(<App />)
  const buttonXl = getByTestId('button-xl')
  expect(buttonXl).toBeInTheDocument()
})

it('to have babylone health logo', () => {
  const { getByTestId } = render(<App />)
  const babylonLogo = getByTestId('babylon-logo')
  expect(babylonLogo).toBeInTheDocument()
})

it('match the snapshot', () => {
  const { asFragment } = render(<App />)

  expect(asFragment()).toMatchSnapshot()
})

it('check it has loading', () => {
  const { getByText } = render(<App />)

  expect(getByText('loading')).toBeInTheDocument()
})
