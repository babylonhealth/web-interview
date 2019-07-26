import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Buttons from './Buttons'
import { toMatchDiffSnapshot } from 'snapshot-diff'

expect.extend({ toMatchDiffSnapshot })

afterEach(cleanup)

it('match the snapshot', () => {
  const { asFragment } = render(<Buttons />)
  expect(asFragment()).toMatchSnapshot()
})

it('check the text of the buttons component', () => {
  const { getByText } = render(<Buttons title="Gp" />)
  expect(getByText('Gp')).toBeInTheDocument()
})

it('check click once', () => {
  const mockClick = jest.fn()
  const { getByText } = render(<Buttons title="Gp" handleClick={mockClick} />)
  fireEvent.click(getByText('Gp'))
  expect(mockClick).toHaveBeenCalledTimes(1)
})

it('change the color of the buttons', () => {
  const { asFragment } = render(<Buttons title="Gp" selectedButton="Gp" />)
  const firstRender = asFragment()
  expect(asFragment()).toMatchSnapshot()
  render(<Buttons title="Gp" selectedButton="" />)
  expect(firstRender).toMatchDiffSnapshot(asFragment())
})
