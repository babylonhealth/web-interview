import React from 'react'
import PropTypes from 'prop-types'

import './TextArea.scss'

export default function TextArea({ value, onChange }) {
  return <textarea className="textarea" value={value} onChange={onChange} />
}

TextArea.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}
