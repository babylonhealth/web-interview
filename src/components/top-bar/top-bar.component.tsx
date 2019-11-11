import React, { FunctionComponent } from 'react'

import { Icon } from 'components/icon/icon.component'

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
