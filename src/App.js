import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  getUsers,
  getAvailableSlots,
  selectConsultantType,
  selectTimeSlot,
  selectAppointmentType,
  setAppointmentNotes,
} from './actions/newAppointment'

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

    this.handleConsultantTypeChange = this.handleConsultantTypeChange.bind(this)
    this.handleAppointmentTypeChange = this.handleAppointmentTypeChange.bind(
      this
    )
    this.handleTimeSlotChange = this.handleTimeSlotChange.bind(this)
    this.handleNotesChange = this.handleNotesChange.bind(this)
  }

  componentDidMount() {
    const { getUsers, getAvailableSlots } = this.props
    getUsers()
    getAvailableSlots()
  }

  handleConsultantTypeChange(e) {
    this.props.selectConsultantType(e.target.value)
  }

  handleAppointmentTypeChange(e) {
    this.props.selectAppointmentType(e.target.value)
  }

  handleTimeSlotChange(e) {
    this.setState({
      timeSlot: e.target.value,
    })
  }

  handleNotesChange(e) {
    this.props.setAppointmentNotes(e.target.value)
  }

  parseAvailableSlots(slots) {
    return slots
  }

  render() {
    const {
      selectedUser,
      consultantTypes,
      selectedConsultantType,
      selectedTimeSlot,
      selectedAppointmentType,
      appointmentNotes,
    } = this.props

    const appointmentTypes = [['Video', 'video'], ['Audio', 'audio']]

    const availableSlots = [
      ['Today 16:30', '2019-12-01T14:16:30.000Z'],
      ['19:00', '2019-12-26T17:19:00.000Z'],
    ]

    return (
      <div className="app">
        <AppHeader />
        <main>
          <header>New Appointment</header>
          {selectedUser && <UserHeader name={selectedUser.firstName} />}

          <Separator />

          <LabeledField icon={<StethoscopeIcon />} label="Consultant Type">
            <RadioGroup
              legend="Consultant Type"
              inputName="consultantType"
              options={consultantTypes}
              selectedValue={selectedConsultantType}
              onChange={this.handleConsultantTypeChange}
            />
          </LabeledField>

          <LabeledField icon={<TimeIcon />} label="Date & Time">
            <RadioGroup
              legend="Date & Time"
              inputName="appointmentSlot"
              options={availableSlots}
              selectedValue={selectedTimeSlot}
              onChange={this.handleTimeSlotChange}
            />
          </LabeledField>

          <LabeledField icon={<CameraIcon />} label="Appointment Type">
            <RadioGroup
              legend="Appointment Type"
              inputName="appointmentType"
              options={appointmentTypes}
              selectedValue={selectedAppointmentType}
              onChange={this.handleAppointmentTypeChange}
            />
          </LabeledField>

          <LabeledField icon={<DocumentIcon />} label="Notes">
            <TextArea
              value={appointmentNotes}
              onChange={this.handleNotesChange}
            />
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

App.propTypes = {
  usersLoading: PropTypes.bool,
  selectedUser: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string,
  }),
  consultantTypes: PropTypes.array,
  availableSlots: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      consultantType: PropTypes.arrayOf(PropTypes.string),
      appointmentType: PropTypes.arrayOf(PropTypes.string),
      time: PropTypes.string,
    })
  ),
  availableSlotsLoading: PropTypes.bool,
  selectedConsultantType: PropTypes.string,
  selectedTimeSlot: PropTypes.string,
  selectedAppointmentType: PropTypes.string,
  appointmentNotes: PropTypes.string,

  getUsers: PropTypes.func,
  getAvailableSlots: PropTypes.func,
  selectConsultantType: PropTypes.func,
  selectTimeSlot: PropTypes.func,
  selectAppointmentType: PropTypes.func,
  setAppointmentNotes: PropTypes.func,
}

const mapStateToProps = state => ({
  usersLoading: state.newAppointment.usersLoading,
  selectedUser: state.newAppointment.selectedUser,
  consultantTypes: state.newAppointment.consultantTypes,
  availableSlots: state.newAppointment.availableSlots,
  availableSlotsLoading: state.newAppointment.availableSlotsLoading,
  selectedConsultantType: state.newAppointment.selectedConsultantType,
  selectedTimeSlot: state.newAppointment.selectedTimeSlot,
  selectedAppointmentType: state.newAppointment.selectedAppointmentType,
  appointmentNotes: state.newAppointment.appointmentNotes,
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  getAvailableSlots: () => dispatch(getAvailableSlots()),
  selectConsultantType: consultantType =>
    dispatch(selectConsultantType(consultantType)),
  selectTimeSlot: timeSlot => dispatch(selectTimeSlot(timeSlot)),
  selectAppointmentType: appointmentType =>
    dispatch(selectAppointmentType(appointmentType)),
  setAppointmentNotes: appointmentNotes =>
    dispatch(setAppointmentNotes(appointmentNotes)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
