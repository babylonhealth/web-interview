import React from 'react'
import PropTypes from 'prop-types'

const UserSection = props => {
  const { firstName, lastName, avatar } = props
  return (
    <span className="app-user">
      <img
        src={avatar}
        className="app-user-logo"
        alt="User Avatar"
        data-testid="avatar"
      />
      <h3 className="user-name">
        {firstName} {lastName}
      </h3>
    </span>
  )
}
UserSection.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
}

export default UserSection
