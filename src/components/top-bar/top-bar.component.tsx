import React, { FunctionComponent } from 'react'

import { Icon } from 'components/icon/icon.component'

import './top-bar.component.scss'

export const TopBar: FunctionComponent = () => {
  return (
    <div className="top-bar">
      <button className="top-bar__burger">
        <Icon alias="burger" />
      </button>
      <div className="top-bar__logo">
        <img src={require('assets/images/logo.png')} alt="Babylon is awesome" />
      </div>
    </div>
  )
}
