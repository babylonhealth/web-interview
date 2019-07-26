import React from 'react'
import ReactDOM from 'react-dom'
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

afterEach(cleanup)

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

// it('check the date', async () => {
//   const { getByTestId } = render(<App />)

//   await waitForElement(() => getByTestId('date'))
//   // expect(getByTestId('date')).toBeInTheDocument()
// })

it('check it has loading', () => {
  const { getByText } = render(<App />)

  expect(getByText('loading')).toBeInTheDocument()
})
