import React, { FunctionComponent } from 'react'

import { UserType } from 'types/user.type'

import './user.component.scss'

export const User: FunctionComponent<{ user: UserType }> = ({ user }) => {
  return (
    <div className="user">
      <img className="user__avatar" src={user.avatar} alt={user.firstName} />
      <span className="user__name">{`${user.firstName} ${user.lastName}`}</span>
    </div>
  )
}
