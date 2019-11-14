import React from 'react'
import renderer from 'react-test-renderer'

import { User } from './user.component'

describe('User', () => {
  const testUser = {
    id: 2,
    avatar: '',
    firstName: 'Kenny',
    lastName: 'McCormick',
  }

  it('should match snapshot', () => {
    const component = renderer.create(<User user={testUser} />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
