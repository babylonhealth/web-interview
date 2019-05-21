import React, { Component } from 'react'

// import { API_ENDPOINT } from './config'

import './App.scss'

import AppHeader from './components/AppHeader/AppHeader'
import Separator from './components/Separator/Separator'

import UserHeader from './components/UserHeader/UserHeader'
import LabeledField from './components/LabeledField/LabeledField'
import StethoscopeIcon from './components/Icons/StethoscopeIcon'
import TimeIcon from './components/Icons/TimeIcon'
import CameraIcon from './components/Icons/CameraIcon'
import DocumentIcon from './components/Icons/DocumentIcon'
import PhotoIcon from './components/Icons/PhotoIcon'
import Button from './components/Button/Button'
import TextArea from './components/TextArea/TextArea'
import RadioGroup from './components/RadioGroup/RadioGroup'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      selectedConsultantType: null,
      selectedAppointmentType: null,
      selectedTimeSlot: null,
      availableSlots: [],
    }

    this.handleConsultantTypeChange = this.handleConsultantTypeChange.bind(this)
    this.handleAppointmentTypeChange = this.handleAppointmentTypeChange.bind(
      this
    )
    this.handleTimeSlotChange = this.handleTimeSlotChange.bind(this)
  }

  handleConsultantTypeChange(e) {
    this.setState({
      selectedConsultantType: e.target.value,
    })
  }

  handleAppointmentTypeChange(e) {
    this.setState({
      selectedAppointmentType: e.target.value,
    })
  }

  handleTimeSlotChange(e) {
    this.setState({
      selectedTimeSlot: e.target.value,
    })
  }

  render() {
    const consultantTypes = [
      ['GP', 'gp'],
      ['Specialist', 'specialist'],
      ['Nurse', 'nurse'],
      ['Therapist', 'therapist'],
      ['Triage Nurse', 'triage_nurse'],
      ['Specialist Nurse', 'specialist_nurse'],
    ]

    const appointmentTypes = [['Video', 'video'], ['Audio', 'audio']]

    const availableSlots = [
      ['Today 16:30', '2019-12-01T14:16:30.000Z'],
      ['19:00', '2019-12-26T17:19:00.000Z'],
    ]

    return (
      <div className="app">
        <AppHeader />
        <main>
          <header>New Appointment</header>
          <UserHeader name="Jane Doe" />

          <Separator />

          <LabeledField icon={<StethoscopeIcon />} label="Consultant Type">
            <RadioGroup
              legend="Consultant Type"
              inputName="consultantType"
              options={consultantTypes}
              selectedValue={this.state.selectedConsultantType}
              onChange={this.handleConsultantTypeChange}
            />
          </LabeledField>

          <LabeledField icon={<TimeIcon />} label="Date & Time">
            <RadioGroup
              legend="Date & Time"
              inputName="appointmentSlot"
              options={availableSlots}
              selectedValue={this.state.selectedTimeSlot}
              onChange={this.handleTimeSlotChange}
            />
          </LabeledField>

          <LabeledField icon={<CameraIcon />} label="Appointment Type">
            <RadioGroup
              legend="Appointment Type"
              inputName="appointmentType"
              options={appointmentTypes}
              selectedValue={this.state.selectedAppointmentType}
              onChange={this.handleAppointmentTypeChange}
            />
          </LabeledField>

          <LabeledField icon={<DocumentIcon />} label="Notes">
            <TextArea />
          </LabeledField>

          <LabeledField icon={<PhotoIcon />} label="Attach a photo">
            <Button invert>+</Button>
          </LabeledField>

          <Separator />

          <Button fullwidth>Book</Button>
        </main>
      </div>
    )
  }
}

export default App
