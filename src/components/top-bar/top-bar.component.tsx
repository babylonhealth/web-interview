import React, { FunctionComponent } from 'react'

import { Icon } from 'components/icon/icon.component'

import './top-bar.scss'

export const TopBar: FunctionComponent = () => {
  return (
    <div className="top-bar">
      <Icon alias="burger" />
      <div className="top-bar__logo">
        <img src="assets/images/logo.png" alt="" />
      </div>
    </div>
  )
}
