import React from 'react'
import PropTypes from 'prop-types'

import './RadioGroup.scss'

export default function RadioGroup({
  legend,
  inputName,
  selectedValue,
  options,
  onChange,
}) {
  return (
    <div className="radiogroup">
      <fieldset>
        <legend className="notVisible">{legend}</legend>
        <ul>
          {options.map(([label, value], index) => (
            <li key={value}>
              <input
                tabIndex="0"
                className="radio notVisible"
                type="radio"
                name={inputName}
                id={value}
                value={value}
                checked={selectedValue === value}
                onChange={onChange}
              />
              <label htmlFor={value}>{label}</label>
            </li>
          ))}
        </ul>
      </fieldset>
    </div>
  )
}

RadioGroup.propTypes = {
  legend: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  selectedValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  onChange: PropTypes.func.isRequired,
}
