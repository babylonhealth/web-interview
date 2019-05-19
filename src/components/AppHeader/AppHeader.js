import React from 'react'

import './AppHeader.scss'

import MenuIcon from '../Icons/MenuIcon'
import logo from './logo.png'

export default function AppHeader() {
  return (
    <div className="app-header">
      <div className="menu-button">
        <MenuIcon />
      </div>
      <img src={logo} className="app-logo" alt="Babylon Health" />
      <div className="user-bubble">NU</div>
    </div>
  )
}
