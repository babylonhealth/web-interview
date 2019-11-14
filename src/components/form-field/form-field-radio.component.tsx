import React, { Component, ReactNode } from 'react'
import dayjs from 'dayjs'

import { Icon } from 'components/icon/icon.component'

import './form-field.component.scss'

type FieldProps = {
  label: string
  icon: string
  options?: any[]
  noOptionsText?: string
  placeholder?: string
  onChange: (type: string, data: string) => void
}

type FieldState = {
  value: any
  options?: any[]
}

export class FormFieldRadio extends Component<FieldProps, FieldState> {
  label: FieldProps['label']
  icon: FieldProps['icon']
  options?: FieldProps['options']
  placeholder?: FieldProps['placeholder']
  onChange: FieldProps['onChange']

  constructor(props: FieldProps) {
    super(props)

    this.state = {
      value: undefined,
      options: [],
    }

    this.label = props.label
    this.icon = props.icon
    this.onChange = props.onChange

    this.options = props.options || undefined
  }

  componentDidUpdate(prevProps: FieldProps, prevState: FieldState) {
    if (this.props.options !== prevState.options) {
      this.setState({ options: this.props.options })
    }
  }

  selectOption(option) {
    this.setState({ value: option })
    this.props.onChange(this.label, option)
  }

  renderOptions(
    options: FieldProps['options'],
    noOptionsText?: string
  ): ReactNode[] {
    if (options) {
      return options.map((option, key) => {
        return (
          <span
            key={key}
            className={`form-field__option pill${
              this.state.value === option ? ' pill--active' : ''
            }`}
            onClick={() => {
              this.selectOption(option)
            }}
          >
            {option.type === 'date'
              ? dayjs(option.value).format('dddd HH:mm')
              : option.value}
          </span>
        )
      })
    }

    if (noOptionsText) {
      return [
        <span key="0" className="form-field__option pill pill--disabled">
          {noOptionsText}
        </span>,
      ]
    }
  }

  render() {
    return (
      <div className="form-field form-field--radio">
        <div className="form-field__label">
          <Icon alias={this.icon}></Icon>
          <span>{this.label}</span>
        </div>

        <div className="form-field__input">
          {this.renderOptions(
            this.state.options,
            this.props.noOptionsText || undefined
          )}
        </div>
      </div>
    )
  }
}
