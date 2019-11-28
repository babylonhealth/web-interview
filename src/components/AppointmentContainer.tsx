import React from 'react'

import logo from '../logo.png'
import { API_ENDPOINT } from '../config'
import '../styles/App.scss'
import { NewAppointmentHeader } from './NewAppointmentHeader'
import { NavigationBar } from './NavigationBar'
import axios from 'axios'
import AppointmentForm from './AppointmentForm'

interface State {
  availableSlots: string[],
  availableAppTypes: string[],
  availableSlotsLoading: boolean,
  user: any,
  userLoading: boolean,

  selectedConsultantType: string,
  selectedAppointmentTime: string,
  selectedAppointmentType: string,
  appointmentNotes: string,

  selectedConsultantTypeError: string,
  selectedAppointmentTimeError: string,
  selectedAppointmentTypeError: string,
  appointmentNotesError: string,
}

export default class AppointmentContainer extends React.PureComponent<{}, State> {

  
  constructor(props:any) {
    super(props)

    this.state = {
      user: '',
      userLoading: true,
      availableSlotsLoading: true,
      availableSlots: [],
      availableAppTypes: [],

      selectedConsultantType: 'gp',
      selectedAppointmentTime: '',
      selectedAppointmentType: '',
      appointmentNotes: '',

      selectedConsultantTypeError: '',
      selectedAppointmentTimeError: '',
      selectedAppointmentTypeError: '',
      appointmentNotesError: '',
    }
  }
  

  async componentDidMount() {
      
    try {
      const slotsUrl = `${API_ENDPOINT}/availableSlots`
      const slotsResponse = await fetch(slotsUrl)
      const slotsJson = await slotsResponse.json();
      this.setState({ 
        availableSlots: slotsJson, 
        availableSlotsLoading: false 
      })
     
    } catch(e) {
      console.log(e)
    }

    try {
      const userUrl = `${API_ENDPOINT}/users/1`
      const userResponse = await fetch(userUrl)
      const userJson = await userResponse.json();
      this.setState({ 
        user: userJson, 
        userLoading: false 
      })
    } catch(e) {
      console.log(e)
    }
  }

  handleAppointmentNotesChange = (e: any) => {
    this.setState({ appointmentNotes: e.target.value})
  }

  handleAppointmentTimesChange = (e: any) => {
    this.setState({ selectedAppointmentTime: e.target.value })
  }

  handleAppointmentTypesChange = (e: any) => {
    this.setState({ selectedAppointmentType: e.target.value })
  }

  handleConsultantTypesChange = (e: any) => {
    this.setState({ selectedConsultantType: e.target.value })
  }
  
  handleValidation = () => {
    let appointmentNotesError = "";

    if (this.state.appointmentNotes === "") {
      appointmentNotesError = "Please enter a note for your consultant" 
    }

    if(appointmentNotesError) {
      this.setState({ appointmentNotesError })
      return false
    }

    return true
  }

  handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(this.state)
    const isValid = await this.handleValidation()
    if(isValid) {
      const appointmentsUrl = `${API_ENDPOINT}/appointments`
      const response = await axios.post(appointmentsUrl,
          {
            userId: this.state.user.id,
            dateTime: this.state.selectedAppointmentTime,
            notes: this.state.appointmentNotes,
            type: this.state.selectedAppointmentType,
          }
        )
      await  console.log("response: ", response)
      // clear form
      this.setState({
        selectedConsultantType: 'gp',
        selectedAppointmentTime: '',
        selectedAppointmentType: '',
        appointmentNotes: '',
      })
      console.log("this.state.appointmentNotes: ", this.state.appointmentNotes)
    }
  }
  
  
  

  render() {

    
    return (

      <>
      <NavigationBar logo={logo} />
      <div className="app">
     
     
      {/* {this.props.userLoading ?
        <div data-testid="userLoading">
          loading...
        </div>  
        : */}

        <NewAppointmentHeader 
          user={this.state.user}
        />

        {/* } */}



        {/* {this.state.availableSlotsLoading ?
        <div data-testid="availableSlotsLoading">
          loading...
        </div>  
        :
        <> */}

        <AppointmentForm 
          availableSlots={this.state.availableSlots}
          availableAppTypes={this.state.availableAppTypes}
          availableSlotsLoading={this.state.availableSlotsLoading}
          user={this.state.user}
          userLoading={this.state.userLoading}

          selectedConsultantType={this.state.selectedConsultantType}
          selectedAppointmentTime={this.state.selectedAppointmentTime}
          selectedAppointmentType={this.state.selectedAppointmentType}
          appointmentNotes={this.state.appointmentNotes}

          selectedConsultantTypeError={this.state.selectedConsultantTypeError}
          selectedAppointmentTimeError={this.state.selectedAppointmentTimeError}
          selectedAppointmentTypeError={this.state.selectedAppointmentTypeError}
          appointmentNotesError={this.state.appointmentNotesError}
        
          handleSubmit={this.handleSubmit}
          handleAppointmentNotesChange={this.handleAppointmentNotesChange}
          handleAppointmentTimesChange={this.handleAppointmentTimesChange}
          handleAppointmentTypesChange={this.handleAppointmentTypesChange}
          handleConsultantTypesChange={this.handleConsultantTypesChange}
        />
       
        {/* </>
        } */}
      </div>
      </>
    )
  }
}
