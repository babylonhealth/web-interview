import React, { Component } from 'react'

import AppHeader from './components/AppHeader/AppHeader'

import { API_ENDPOINT } from './config'

import './App.scss'

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
          <header>New Appoitment</header>
        </main>
      </div>
    )
  }
}

export default App
