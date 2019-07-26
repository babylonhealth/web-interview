import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import UserSection from './UserSection'

afterEach(cleanup)

it('render firstName and lastName', () => {
  const { getByText } = render(
    <UserSection firstName="Behnaz" lastName="testing" />
  )
  expect(getByText('Behnaz testing')).toBeInTheDocument()
})

it('has an avatar', () => {
  const { getByTestId } = render(
    <UserSection avatar="https://www.w3schools.com/howto/img_avatar2.png" />
  )
  expect(getByTestId('avatar')).toBeInTheDocument()
})

it('match the snapshot', () => {
  const { asFragment } = render(<UserSection />)
  expect(asFragment()).toMatchSnapshot()
})
