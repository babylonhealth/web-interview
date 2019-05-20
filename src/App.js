import React, { Component } from 'react'
import Clock from 'react-feather/dist/icons/clock'
import Video from 'react-feather/dist/icons/video'
import Notes from 'react-feather/dist/icons/book-open'
import Medical from 'react-feather/dist/icons/git-branch'

import API_ENDPOINT from './config'
import { filterByType, removeDuplicates } from './helpers/appointment-filters'
import Profile from './containers/profile/Profile'
import AppointmentDetailsRow from './containers/appointment-details/AppointmentDetails'
import Header from './components/header/Header'
import SubHeading from './components/sub-heading/SubHeading'
import Button from '../src/components/button/Button'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.notesRef = React.createRef()
    // clean up user []
    this.state = {
      selectedAppointmentType: 'gp',
      selectedAppointmentTime: '',
      notes: '',
      availableSlots: [],
      user: [],
    }
  }

  componentDidMount() {
    // TODO: Make generic fetch function
    fetch(`${API_ENDPOINT}/availableSlots`)
      .then(res => res.json())
      .then(availableSlots => {
        this.setState({ availableSlots })
      })
      .catch(error => {
        console.error(error)
      })

    fetch(`${API_ENDPOINT}/users`)
      .then(res => res.json())
      .then(user => this.setState({ user }))
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    const selectedAppointmentType = type => {
      this.setState({ selectedAppointmentTime: type })
    }

    const updateAppointmentType = type => {
      this.setState({ selectedAppointmentType: type })
    }

    const validAppointments = this.state.availableSlots.filter(
      availableSlot => {
        if (
          availableSlot.consultantType.includes(
            this.state.selectedAppointmentType
          )
        ) {
          return availableSlot
        }
      }
    )

    const typeConsultant = this.state.availableSlots
      .map(availableSlot => availableSlot.consultantType)
      .flatMap(consultantType => consultantType)

    const uniqueConsultantTypes = removeDuplicates(typeConsultant)
    const availableTimes = filterByType(validAppointments, 'time')
    const uniqueAppointmentTypes = filterByType(
      validAppointments,
      'appointmentType'
    )
    // TODO: Stop buttons being highlighted by default unless consultant type
    return (
      <div className="app">
        <Header />
        <div className="main-profile">
          <div className="sub-title">
            <SubHeading subHeading="New appointment" />
          </div>
          <Profile user={this.state.user} />
        </div>
        <div className="main">
          <div className="main-top">
            <Medical />
            <div>Consultant Type</div>
          </div>
          <div className="buttons-row">
            <AppointmentDetailsRow
              data={uniqueConsultantTypes}
              onClick={updateAppointmentType}
            />
          </div>
          <div className="main-top">
            <Clock />
            <div>Date & Time</div>
          </div>
          <div className="buttons-row">
            <AppointmentDetailsRow
              data={availableTimes}
              onClick={selectedAppointmentType}
            />
          </div>
          <div className="main-top">
            <Video />
            <div>Appointment Type</div>
          </div>
          <div className="buttons-row">
            <AppointmentDetailsRow data={uniqueAppointmentTypes} />
          </div>
          <div className="main-top">
            <Notes />
            <div>Notes</div>
          </div>
          <div className="text-area-row">
            <textarea
              ref="notes"
              placeholder="Describe your symptoms"
              value={this.state.notes}
              onChange={event => {
                this.setState({
                  notes: event.target.value,
                })
              }}
            />
          </div>
          <Button text="Book" styles="large-button" />
        </div>
      </div>
    )
  }
}

export default App
