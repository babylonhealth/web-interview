import React, { Component } from 'react'

import { ModelService } from 'services/model/model.service'

import { User } from 'components/user/user.component'
import { Group } from 'components/group/group.component'
import { Form } from 'components/form/form.component'
import { FormField } from 'components/form-field/form-field.component'
import { TopBar } from 'components/top-bar/top-bar.component'
import { BottomBar } from 'components/bottom-bar/bottom-bar.component'

import { UserType } from 'types/user.type'

import 'App.scss'
import { FormFieldRadio } from 'components/form-field/form-field-radio.component'

type AppState = {
  user?: UserType
  availableConsultantTypes?: {
    value: string[]
    dates: Date[]
  }[]
  availableDates?: Date[]
  availableAppointmentTypes?: {
    value: string
  }[]
  formData?: {
    userId?: number
    dateTime?: Date
    notes?: string
    type?: string
  }
}

export default class App extends Component<any, AppState> {
  modelService: any

  constructor(props) {
    super(props)

    this.state = {
      user: {
        id: 1,
        avatar: '',
        firstName: '',
        lastName: '',
      },
      availableAppointmentTypes: [{ value: 'Audio' }, { value: 'Video' }],
    }

    this.modelService = ModelService
  }

  private _submitForm = () => {
    this.modelService.post('appointments', this.state.formData)
  }

  private _updateState = (key: string, value: any) => {
    this.setState({ [key]: value })
  }

  updateFormData = (label: string, option: any) => {
    let fieldData: any = {}

    if (label === 'Consultant Type') {
      fieldData = { type: `${option.value} appointment` }

      this._updateState('availableDates', option.dates)
    }

    if (label === 'Notes') {
      fieldData = { notes: option }
    }

    if (label === 'Date & Time') {
      fieldData = { dateTime: option.value }
    }

    if (label === 'userId') {
      fieldData = { userId: option }
    }

    this.setState({
      formData: Object.assign({}, this.state.formData, fieldData),
    })
  }

  getAvailableConsultantTypes = (
    availableSlots: { consultantType: string[]; time: string }[]
  ) => {
    const consultantTypes: {
      type: string
      value: string
      dates?: {
        type: string
        value: string
      }[]
    }[] = []

    // not the nicest but thought it would be better to get all available consultant types from the API
    availableSlots.forEach(slot => {
      slot.consultantType.forEach(type => {
        let consultantType: any = {}

        if (
          (consultantType = consultantTypes.find(cType => cType.value === type))
        ) {
          consultantType.dates.push({ type: 'date', value: slot.time })
          return
        }

        consultantTypes.push({
          type: 'string',
          value: type,
          dates: [{ type: 'date', value: slot.time }],
        })
      })
    })

    return consultantTypes
  }

  componentDidMount() {
    this.modelService.get('availableSlots').then(availableSlots => {
      this._updateState(
        'availableConsultantTypes',
        this.getAvailableConsultantTypes(availableSlots)
      )
    })

    if (this.state.user) {
      this.modelService
        .get('users', this.state.user.id)
        .then((user: UserType) => {
          this._updateState('user', user)
          this.updateFormData('userId', user.id)
        })
    }
  }

  render() {
    return (
      <div className="app">
        <TopBar />
        <h1 className="heading heading--large">New Appointment</h1>
        <Form>
          <Group>
            {this.state.user && <User user={this.state.user} />}
            <div className="divider"></div>
            <FormFieldRadio
              label="Consultant Type"
              icon="stethoscope"
              options={this.state.availableConsultantTypes}
              onChange={this.updateFormData}
            />
          </Group>
          <Group>
            <FormFieldRadio
              label="Date &amp; Time"
              icon="clock"
              options={this.state.availableDates}
              noOptionsText="Select a Consultant Type"
              onChange={this.updateFormData}
            />
            <FormFieldRadio
              label="Appointment Type"
              icon="radio"
              options={this.state.availableAppointmentTypes}
              onChange={this.updateFormData}
            />
            <FormField
              type="textarea"
              label="Notes"
              icon="video"
              placeholder="Describe your symptoms"
              onChange={this.updateFormData}
            />
          </Group>
        </Form>
        <BottomBar>
          <div className="divider"></div>
          <button
            onClick={() => {
              this._submitForm()
            }}
            className="button button--submit"
          >
            Book
          </button>
        </BottomBar>
      </div>
    )
  }
}
