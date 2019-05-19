import React, { Component } from 'react'

import AppHeader from './components/AppHeader/AppHeader'
import Separator from './components/Separator/Separator'

import StethoscopeIcon from './components/Icons/StethoscopeIcon'

// import { API_ENDPOINT } from './config'

import './App.scss'
import UserHeader from './components/UserHeader/UserHeader'
import LabeledField from './components/LabeledField/LabeledField'

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
        </main>
      </div>
    )
  }
}

export default App
