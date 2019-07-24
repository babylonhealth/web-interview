import React, { Component } from 'react'
import Buttons from './Components/Buttons'
import moment from 'moment'
import logo from './logo.png'
import { API_ENDPOINT } from './config'
//
import './App.scss'

const consultant = ['GP', 'Therapist', 'Physio', 'Specialist']
const appTypeMedium = ['Audio', 'Video']

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userId: 1,
      selectedAppointmentType: '',
      selectedConsultantType: null,
      availableSlots: [],
      availableSlotsByConsultantType: [],
      selectedDate: '',
      symptoms: '',
      UserInfo: {},
    }
  }

  async componentDidMount() {
    this.getUser()
    this.getData()
  }

  getUser = async () => {
    try {
      const fetchUserData = await fetch(`${API_ENDPOINT}/users/1`)
      const userData = await fetchUserData.json()
      this.setState({ UserInfo: userData })
    } catch (error) {
      console.log(error)
    }
  }
  getData = async () => {
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
      selectedAppointmentType: item,
    })
  }

  handleChange = e => {
    this.setState({
      symptoms: e.target.value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const body = {
      notes: this.state.symptoms,
      userId: 2,
      consultantType: this.state.selectedConsultantType,
      appointmentType: this.state.selectedAppointmentType,
      dateTime: this.state.selectedDate,
    }

    try {
      await fetch('http://localhost:3010/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.log({ error })
    }
    this.setState({
      selectedAppointmentType: '',
      selectedConsultantType: null,
      selectedDate: '',
      symptoms: '',
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
        <h1 className="h1">New appointment</h1>
        <span className="app-user">
          <img
            src={this.state.UserInfo.avatar}
            className="app-user-logo"
            alt="User Avatar"
          />
          <h3 className="user-name">
            {this.state.UserInfo.firstName} {this.state.UserInfo.lastName}
          </h3>
        </span>
        <div className="section">
          <span className="icon">
            <i className="fa fa-stethoscope"></i>
            <h2 className="h6">Consultant Type</h2>
          </span>
          <div className="container">
            {consultant.map((item, index) => (
              <Buttons
                handleClick={this.handleClick}
                key={index}
                title={item}
                selectedButton={this.state.selectedConsultantType}
              />
            ))}
          </div>
          <div className="section">
            <span className="icon">
              <i className="fa fa-clock-o"></i>
              <h2 className="h6">Appointment Date and time</h2>
            </span>
            <div className="container">
              {slots.map(slot => (
                <Buttons
                  title={moment(slot.time).format('MMM DD, h:mm a')}
                  handleClick={this.handleAppointmentClick}
                  key={slot.id}
                  selectedButton={this.state.selectedDate}
                />
              ))}
            </div>
          </div>
          <div className="section">
            <span className="icon">
              <i className="fa fa-video-camera"></i>
              <h2 className="h6">Appointment Type</h2>
            </span>
            <div className="container">
              {appTypeMedium.map((item, index) => (
                <Buttons
                  handleClick={this.handleAppMedium}
                  key={index}
                  title={item}
                  selectedButton={this.state.selectedAppointmentType}
                />
              ))}
            </div>
          </div>
          <div className="section">
            {' '}
            <span className="icon">
              <i className="fa fa-comments-o"></i>
              <h2 className="h6">Notes</h2>
            </span>
            <textarea
              className="note"
              placeholder="Describe your symptoms"
              type="text"
              value={this.state.symptoms}
              onChange={this.handleChange}
            />
          </div>
          <hr />
          <div>
            <div className="button-xl" onClick={this.handleSubmit}>
              Book
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
