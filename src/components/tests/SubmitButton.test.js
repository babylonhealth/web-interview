import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import { SubmitButton } from '../SubmitButton'

afterEach(cleanup)

test('<SubmitButton>', () => {
  const { getByTestId, container } = render(<SubmitButton />)
  expect(container.firstChild).toMatchSnapshot()
  expect(getByTestId('submitButton')).toBeTruthy()
})
