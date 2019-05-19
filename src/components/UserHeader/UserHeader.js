import React from 'react'
import PropTypes from 'prop-types'

import './UserHeader.scss'

export default function UserHeader({ name, onClick }) {
  return (
    <div className="user-header">
      <img
        className="avatar"
        src="data:image/png;base64,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"
        alt="User avatar"
      />
      <span className="name-label">{name}</span>
      <button className="frameless-button" onClick={onClick}>
        Change
      </button>
    </div>
  )
}

UserHeader.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
}
