import React, { FunctionComponent } from 'react'

import { UserType } from 'types/user.type'

export const User: FunctionComponent<{ user: UserType }> = ({ user }) => {
  return (
    <div className="user">
      <img src="{ user.avatar }" alt="{ user.firstName }" />
      <span className="user__name">{user.firstName}</span>
    </div>
  )
}
