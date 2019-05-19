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

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      selectedAppointmentType: 'gp',
      availableSlots: [],
    }
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <main>
          <header>New Appointment</header>
          <UserHeader name="Jane Doe" />

          <Separator />

          <LabeledField icon={<StethoscopeIcon />} label="Consultant Type">
            <button>Button</button>
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
