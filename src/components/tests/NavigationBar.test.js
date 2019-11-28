import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { NavigationBar } from '../NavigationBar'

afterEach(cleanup)

test('<NavigationBar>', () => {
  const { queryByTestId, container } = render(<NavigationBar logo />)
  expect(container.firstChild).toMatchSnapshot()
  expect(queryByTestId('babylonLogo')).toBeTruthy()
})
