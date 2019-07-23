import React, { Component } from 'react'

import logo from './logo.png'
import { API_ENDPOINT } from './config'

import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      selectedAppointmentType: 'gp',
      selectedConsultantType: null,
      availableSlots: [],
      availableSlotsByConsultantType: [],
    }
  }

  async componentDidMount() {
    try {
      const fetchData = await fetch(`${API_ENDPOINT}/availableSlots`)
      const data = await fetchData.json()
      this.setState({ availableSlots: data })
    } catch (error) {
      console.log(error)
    }
  }

  handleClick = btnValue => {
    const filteredData = this.state.availableSlots.filter(item =>
      item.consultantType.includes(btnValue)
    )
    this.setState({
      availableSlotsByConsultantType: filteredData,
      selectedConsultantType: btnValue,
    })
  }

  render() {
    // calculate matching slots
    const {
      availableSlots,
      availableSlotsByConsultantType,
      selectedConsultantType,
    } = this.state

    let slots =
      selectedConsultantType !== null
        ? availableSlotsByConsultantType
        : availableSlots
    // for (let i = 0; i < this.state.availableSlots.length; i++) {
    //   for (
    //     let j = 0;
    //     j < this.state.availableSlots[i]['consultantType'].length;
    //     j++
    //   ) {
    //     if (
    //       this.state.availableSlots[j]['consultantType'][i] ===
    //       this.state.selectedAppointmentType
    //     ) {
    //       slots.push(this.state.availableSlots[j])
    //     }
    //   }
    // }
    console.log(slots)
    return (
      <div className="app">
        <h2 className="h6">New appointment</h2>
        <div className="app-header">
          <img src={logo} className="app-logo" alt="Babylon Health" />
        </div>
        <div style={{ maxWidth: 600, margin: '24px auto' }}>
          <div
            className="button"
            id="GP-button"
            onClick={e => this.handleClick('gp')}
          >
            GP
          </div>
          <div className="button" onClick={e => this.handleClick('therapist')}>
            Therapist
          </div>
          <div className="button" onClick={e => this.handleClick('physio')}>
            Physio
          </div>
          <div className="button" onClick={e => this.handleClick('specialist')}>
            Specialist
          </div>
          <div>
            <strong>Appointments</strong>
            {slots.map(slot => (
              <li
                className="appointment-button"
                key={availableSlots.id}
                onClick={() => {
                  this.setState({ selectedAppointment: slot })
                }}
              >
                {slot.time}
              </li>
            ))}
          </div>
          <div>
            <strong>Notes</strong>
            <textarea />
          </div>
          <div>
            <div
              className="button"
              onClick={() => {
                /* TODO: submit the data */
              }}
            >
              Book appointment
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
