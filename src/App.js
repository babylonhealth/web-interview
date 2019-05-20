import React, { Component } from 'react'
import Clock from 'react-feather/dist/icons/clock'
import Video from 'react-feather/dist/icons/video'
import Notes from 'react-feather/dist/icons/book-open'
import Medical from 'react-feather/dist/icons/git-branch'

import API_ENDPOINT from './config'
import { filterByType, removeDuplicates } from './helpers/appointment-filters'
import converToISOString from './helpers/validators'
import Profile from './containers/profile/Profile'
import AppointmentDetailsRow from './containers/appointment-details/AppointmentDetails'
import Header from './components/header/Header'
import SubHeading from './components/sub-heading/SubHeading'
import Button from '../src/components/button/Button'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedConsultantType: 'gp',
      selectedAppointmentTime: '',
      selectedAppointmentType: '',
      notes: '',
      availableSlots: [],
      user: [],
    }
  }

  componentDidMount() {
    fetch(`${API_ENDPOINT}/availableSlots`)
      .then(res => res.json())
      .then(availableSlots => {
        this.setState({
          availableSlots,
          selectedAppointmentTime: availableSlots[0].time,
          selectedAppointmentType: availableSlots[0].appointmentType[0],
        })
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
    const setSelectedAppointmentType = type => {
      this.setState({ selectedAppointmentType: type })
    }

    const setConsultantType = type => {
      this.setState({ selectedConsultantType: type })
    }

    const setAppointmentTime = type => {
      this.setState({ selectedAppointmentTime: type })
    }

    const validAppointments = this.state.availableSlots.filter(
      availableSlot => {
        if (
          availableSlot.consultantType.includes(
            this.state.selectedConsultantType
          )
        ) {
          return availableSlot
        }
      }
    )

    const postUserData = () => {
      const userId = Number(this.state.user[0].id)
      const notes = String(this.state.notes) || null
      const dateTime = converToISOString(this.state.selectedAppointmentTime)
      const type = `${this.state.selectedConsultantType.toUpperCase()} appointment`
      const body = `userId=${userId}&dateTime=${dateTime}&notes=${notes}&type=${type}`

      fetch(`${API_ENDPOINT}/appointments`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
        body,
      }).catch(error => {
        console.error(error)
      })
    }

    const typeConsultant = this.state.availableSlots
      .map(availableSlot => availableSlot.consultantType)
      .flatMap(consultantType => consultantType)

    const uniqueConsultantTypes = removeDuplicates(typeConsultant)
    const availableTimes = filterByType(validAppointments, 'time')
    const uniqueAppointmentTypes = filterByType(
      validAppointments,
      'appointmentType'
    )

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
              onClick={setConsultantType}
            />
          </div>
          <div className="main-top">
            <Clock />
            <div>Date & Time</div>
          </div>
          <div className="buttons-row">
            <AppointmentDetailsRow
              data={availableTimes}
              onClick={setAppointmentTime}
            />
          </div>
          <div className="main-top">
            <Video />
            <div>Appointment Type</div>
          </div>
          <div className="buttons-row">
            <AppointmentDetailsRow
              data={uniqueAppointmentTypes}
              onClick={setSelectedAppointmentType}
            />
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
          <Button text="Book" styles="large-button" onClick={postUserData} />
        </div>
      </div>
    )
  }
}

export default App
