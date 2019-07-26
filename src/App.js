import React, { Component } from 'react'
import Buttons from './Components/Buttons'
import axios from 'axios'
import moment from 'moment'
import logo from './logo.png'
import { API_ENDPOINT } from './config'
import UserSection from './Components/UserSection'
import './App.scss'

const consultant = ['gp', 'therapist', 'physio', 'specialist']
const captalizeConsultantTitle = consultantArray =>
  consultantArray.map(name =>
    name
      .split(' ')
      .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join('')
  )

const consultantTitle = captalizeConsultantTitle(consultant)

const appTypeMedium = ['Audio', 'Video']

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedAppointmentType: '',
      selectedConsultantType: null,
      availableSlots: [],
      availableSlotsByConsultantType: [],
      selectedDate: '',
      symptoms: '',
      userInfo: {},
      error: null,
      loading: false,
    }
  }

  async componentDidMount() {
    this.getData()
    this.getUser()
  }

  getUser = async () => {
    this.setState({
      loading: true,
    })
    try {
      const userData = await axios.get(`${API_ENDPOINT}/users/1`)

      this.setState({ userInfo: userData.data, loading: false })
    } catch (error) {
      this.setState({
        error,
        loading: false,
      })
    }
  }
  getData = async () => {
    this.setState({ loading: true })
    try {
      const availableSlot = await axios.get(`${API_ENDPOINT}/availableSlots`)
      this.setState({ availableSlots: availableSlot.data, loading: false })
    } catch (error) {
      this.setState({
        error,
        loading: false,
      })
    }
  }

  handleConsultantClick = btnValue => {
    const filteredData = this.state.availableSlots.filter(item =>
      item.consultantType.includes(btnValue.toLowerCase())
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

  handleNote = e => {
    this.setState({
      symptoms: e.target.value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const {
      symptoms,
      userInfo,
      selectedConsultantType,
      selectedAppointmentType,
      selectedDate,
      availableSlots,
    } = this.state
    const date = availableSlots.find(
      item => moment(item.time).format('MMM DD, h:mm a') === selectedDate
    )
    console.log(date)
    if (
      symptoms === '' ||
      userInfo === '' ||
      selectedAppointmentType === '' ||
      selectedConsultantType === '' ||
      selectedDate === ''
    ) {
      this.setState({
        error: 'Please fill the form completely',
      })
    } else {
      const body = {
        notes: symptoms,
        userId: userInfo.id,
        consultantType: selectedConsultantType,
        appointmentType: selectedAppointmentType,
        dateTime: date.time,
      }

      try {
        await axios.post('http://localhost:3010/appointments', body)
      } catch (error) {
        this.setState({
          error,
        })
      }
      this.setState({
        selectedAppointmentType: '',
        selectedConsultantType: null,
        selectedDate: '',
        symptoms: '',
        error: null,
      })
    }
  }

  render() {
    const {
      availableSlots,
      availableSlotsByConsultantType,
      selectedConsultantType,
      selectedAppointmentType,
      loading,
      userInfo,
      selectedDate,
      symptoms,
      error,
    } = this.state

    let slots =
      selectedConsultantType !== null
        ? availableSlotsByConsultantType
        : availableSlots
    return (
      <div className="app">
        <div className="app-header">
          <img
            src={logo}
            className="app-logo"
            alt="Babylon Health"
            data-testid="babylon-logo"
          />
        </div>

        <h1 className="h1">New appointment</h1>
        <UserSection
          firstName={userInfo.firstName}
          lastName={userInfo.lastName}
          avatar={userInfo.avatar}
        />
        <div className="section">
          <span className="icon">
            <i className="fa fa-stethoscope"></i>
            <h2>Consultant Type</h2>
          </span>
          <div className="container">
            {consultantTitle.map((item, index) => (
              <Buttons
                handleClick={this.handleConsultantClick}
                key={index}
                title={item}
                selectedButton={selectedConsultantType}
              />
            ))}
          </div>
          <div className="section">
            <span className="icon">
              <i className="fa fa-clock-o"></i>
              <h2>Appointment Date and time</h2>
            </span>
            <div className="container" data-testid="slot">
              {loading ? (
                <h3>loading</h3>
              ) : (
                slots.map(slot => (
                  <Buttons
                    title={moment(slot.time).format('MMM DD, h:mm a')}
                    handleClick={this.handleAppointmentClick}
                    key={slot.id}
                    selectedButton={selectedDate}
                  />
                ))
              )}
            </div>
          </div>
          <div className="section">
            <span className="icon">
              <i className="fa fa-video-camera"></i>
              <h2>Appointment Type</h2>
            </span>
            <div className="container">
              {appTypeMedium.map((item, index) => (
                <Buttons
                  handleClick={this.handleAppMedium}
                  key={index}
                  title={item}
                  selectedButton={selectedAppointmentType}
                />
              ))}
            </div>
          </div>
          <div className="section">
            {' '}
            <span className="icon">
              <i className="fa fa-comments-o"></i>
              <h2>Notes</h2>
            </span>
            <textarea
              aria-label="note for the symptoms"
              className="note"
              data-testid="symptoms"
              placeholder="Describe your symptoms"
              type="text"
              value={symptoms}
              onChange={this.handleNote}
            />
          </div>
          <hr />
          <div>
            {error && <h3 className="fillFormAlert">{error}</h3>}
            <button
              data-testid="button-xl"
              className="button-xl"
              onClick={this.handleSubmit}
            >
              Book
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
