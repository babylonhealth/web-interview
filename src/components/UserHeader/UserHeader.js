import React from 'react'
import PropTypes from 'prop-types'

import './UserHeader.scss'

export default function UserHeader({ name, imgSrc, onClick }) {
  return (
    <div className="user-header">
      <img className="avatar" src={imgSrc} alt="User avatar" />
      <span className="name-label">{name}</span>
      <button className="frameless-button" onClick={onClick}>
        Change
      </button>
    </div>
  )
}

UserHeader.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string,
  onClick: PropTypes.func,
}
