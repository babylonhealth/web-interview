import React, { Component } from 'react'

import Buttons from './Components/Buttons'
import logo from './logo.png'
import { API_ENDPOINT } from './config'

import './App.scss'

const consultant = ['gp', 'therapist', 'physio', 'specialist']
const appTypeMedium = ['audio', 'video']
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      selectedAppointmentType: 'audio',
      selectedConsultantType: null,
      availableSlots: [],
      availableSlotsByConsultantType: [],
      selectedDate: '',
      selectedMedium: '',
      symptoms: '',
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

  handleAppointmentClick = date => {
    this.setState({
      selectedDate: date,
    })
  }

  handleAppMedium = item => {
    this.setState({
      selectedMedium: item,
    })
  }

  handleChange = e => {
    this.setState({
      symptoms: e.target.value,
    })
  }

  handleSubmit = e => {
    const data = new FormData(e.target.value)
    fetch('http://localhost:3010/appointments', {
      method: 'POST',
      body: data,
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

    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="Babylon Health" />
        </div>
        <h2 className="h6">New appointment</h2>
        <div style={{ maxWidth: 900, margin: '24px auto' }}>
          <h2 className="h6">Consultant Type</h2>
          {consultant.map((item, index) => (
            <Buttons
              handleClick={this.handleClick}
              key={index}
              title={item}
              selectedButton={this.state.selectedConsultantType}
            />
          ))}

          <div>
            <h2 className="h6">Appointment Date and time</h2>
            {slots.map(slot => (
              <Buttons
                title={slot.time}
                handleClick={this.handleAppointmentClick}
                key={slot.id}
                selectedButton={this.state.selectedDate}
              />
            ))}
          </div>
          <div>
            <h2 className="h6">Appointment Type</h2>
            {appTypeMedium.map((item, index) => (
              <Buttons
                handleClick={this.handleAppMedium}
                key={index}
                title={item}
                selectedButton={this.state.selectedMedium}
              />
            ))}
          </div>
          <div>
            <h2 className="h6">Note</h2>
            <textarea
              className="note"
              placeHolder="Describe your symptoms"
              type="text"
              value={this.state.symptoms}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <div className="button" onClick={this.handleSubmit}>
              Book appointment
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
