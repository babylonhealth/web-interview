import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Button.scss'

export default function Button({ children, onClick, fullwidth, invert }) {
  return (
    <button
      className={classNames('button', {
        fullwidth,
        invert,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  fullwidth: PropTypes.bool,
  invert: PropTypes.bool,
}
