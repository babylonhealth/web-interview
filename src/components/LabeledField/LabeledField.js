import React from 'react'
import PropTypes from 'prop-types'

import './LabeledField.scss'

export default function LabeledField({ icon, label, children }) {
  return (
    <div className="labeled-field">
      <div className="field-header">
        {icon}
        <span className="label">{label}</span>
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

LabeledField.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  children: PropTypes.node,
}
