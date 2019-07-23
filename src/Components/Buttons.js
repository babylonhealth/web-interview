import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  const { selectedButton, handleClick, title } = props
  return (
    <button
      className={
        selectedButton === title ? 'appointment-button' : 'appointment-button1'
      }
      onClick={e => handleClick(title)}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  selectedButton: PropTypes.string,
  handleClick: PropTypes.func,
  title: PropTypes.string,
}
export default Button
