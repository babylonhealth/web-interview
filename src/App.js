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
      selectedAppointmentType: 'video',
      availableSlots: [],
    }

    this.handleTypeChange = this.handleTypeChange.bind(this)
  }

  handleTypeChange(e) {
    this.setState({
      selectedAppointmentType: e.target.value,
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
              options={consultantTypes}
              selectedValue={this.state.selectedAppointmentType}
              onChange={this.handleTypeChange}
            />
          </LabeledField>

          <LabeledField icon={<TimeIcon />} label="Date & Time">
            <button>Button</button>
          </LabeledField>

          <LabeledField icon={<CameraIcon />} label="Appointment Type">
            <button>Button</button>
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
