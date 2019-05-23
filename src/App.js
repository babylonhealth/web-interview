import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { formatRelative } from 'date-fns'
import { enGB } from 'date-fns/locale'

import {
  getUsers,
  getAvailableSlots,
  selectConsultantType,
  selectTimeSlot,
  selectAppointmentType,
  setAppointmentNotes,
  postAppointment,
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
    this.handleBookAppointment = this.handleBookAppointment.bind(this)
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
    const selected = this.props.availableSlots.find(
      slot => slot.id.toString() === e.target.value
    )
    debugger
    this.props.selectTimeSlot(selected)
  }

  handleNotesChange(e) {
    this.props.setAppointmentNotes(e.target.value)
  }

  handleBookAppointment(e) {
    const {
      postAppointment,
      selectedUser,
      selectedConsultantType,
      selectedTimeSlot,
      appointmentNotes,
    } = this.props

    postAppointment({
      userId: selectedUser.id,
      dateTime: selectedTimeSlot.time,
      notes: appointmentNotes,
      type: selectedConsultantType,
    })
  }

  parseConsultantType(slots = []) {
    const consultantTypes = []
    slots.forEach(slot => {
      slot.consultantType.forEach(type => {
        if (!consultantTypes.includes(type)) {
          consultantTypes.push(type)
        }
      })
    })
    return consultantTypes.map(type => [
      type.charAt(0).toUpperCase() + type.slice(1),
      type,
    ])
  }

  parseTimeSlots(slots = []) {
    return slots
      .filter(slot =>
        slot.consultantType.includes(this.props.selectedConsultantType)
      )
      .map(slot => {
        const dateFmt = formatRelative(new Date(slot.time), new Date(), {
          locale: enGB,
        })
        return [
          dateFmt.charAt(0).toUpperCase() + dateFmt.slice(1),
          slot.id.toString(),
        ]
      })
  }

  render() {
    const {
      usersLoading,
      selectedUser,
      availableSlotsLoading,
      availableSlots,
      selectedConsultantType,
      selectedTimeSlot,
      selectedAppointmentType,
      appointmentNotes,
    } = this.props

    const consultantTypes = this.parseConsultantType(availableSlots)
    console.log('consultantTypes', consultantTypes)

    const appointmentTypes = [['Video', 'video'], ['Audio', 'audio']]

    const timeSlots = this.parseTimeSlots(availableSlots)

    return (
      <div className="app">
        <AppHeader />
        <main>
          <header>New Appointment</header>
          {usersLoading && <div>LOADING...</div>}
          {!usersLoading && (
            <UserHeader
              name={`${selectedUser.firstName} ${selectedUser.lastName}`}
              imgSrc={selectedUser.avatar}
            />
          )}

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
            {!availableSlotsLoading && (
              <RadioGroup
                legend="Date & Time"
                inputName="appointmentSlot"
                options={timeSlots}
                selectedValue={`${selectedTimeSlot.id}`}
                onChange={this.handleTimeSlotChange}
              />
            )}
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

          <Button fullwidth onClick={this.handleBookAppointment}>
            Book
          </Button>
        </main>
      </div>
    )
  }
}

const timeSlotType = PropTypes.shape({
  id: PropTypes.number,
  consultantType: PropTypes.arrayOf(PropTypes.string),
  appointmentType: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.string,
})

App.propTypes = {
  usersLoading: PropTypes.bool,
  selectedUser: PropTypes.shape({
    id: PropTypes.number,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    avatar: PropTypes.string,
  }),
  availableSlots: PropTypes.arrayOf(timeSlotType),
  availableSlotsLoading: PropTypes.bool,
  selectedConsultantType: PropTypes.string,
  selectedTimeSlot: timeSlotType,
  selectedAppointmentType: PropTypes.string,
  appointmentNotes: PropTypes.string,

  getUsers: PropTypes.func,
  getAvailableSlots: PropTypes.func,
  selectConsultantType: PropTypes.func,
  selectTimeSlot: PropTypes.func,
  selectAppointmentType: PropTypes.func,
  setAppointmentNotes: PropTypes.func,
  postAppointment: PropTypes.func,
}

const mapStateToProps = state => ({
  usersLoading: state.newAppointment.usersLoading,
  selectedUser: state.newAppointment.selectedUser,
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
  postAppointment: appointment => dispatch(postAppointment(appointment)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
