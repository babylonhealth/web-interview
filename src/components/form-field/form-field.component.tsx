import React, { Component } from 'react'
import { Icon } from 'components/icon/icon.component'

import './form-field.component.scss'

type FieldProps = {
  type: string
  label: string
  icon: string
  placeholder?: string
  onChange: (type: string, data: string) => void
}

type FieldState = {
  value: string
}

export class FormField extends Component<FieldProps, FieldState> {
  type: FieldProps['type']
  label: FieldProps['label']
  icon: FieldProps['icon']
  placeholder?: FieldProps['placeholder']
  onChange: FieldProps['onChange']

  constructor(props: FieldProps) {
    super(props)

    this.state = {
      value: undefined,
    }

    this.type = props.type
    this.label = props.label
    this.icon = props.icon
    this.onChange = props.onChange

    this.placeholder = props.placeholder || undefined
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
    this.props.onChange(this.label, event.target.value)
  }

  render() {
    return (
      <div className={`form-field form-field--${this.type}`}>
        <div className="form-field__label">
          <Icon alias={this.icon}></Icon>
          <span>{this.label}</span>
        </div>

        {this.type === 'textarea' && (
          <textarea
            className="form-field__input"
            onChange={this.handleChange}
            placeholder={this.placeholder}
          ></textarea>
        )}

        {this.type === 'input' && (
          <input className="form-field__input" onChange={this.handleChange} />
        )}
      </div>
    )
  }
}
