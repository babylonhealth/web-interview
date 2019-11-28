import React from 'react'
import '../styles/App.scss'
import { ConsultantTypes } from './ConsultantTypes'
import { AppointmentTimes } from './AppointmentTimes'
import { AppointmentTypes } from './AppointmentTypes'
import { AppointmentNotes } from './AppointmentNotes'
import { Responsive } from 'semantic-ui-react'
import { SubmitButton } from './SubmitButton'

interface Props {
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

  handleSubmit: any,
  handleAppointmentNotesChange: any,
  handleAppointmentTimesChange: any,
  handleAppointmentTypesChange: any,
  handleConsultantTypesChange: any,
}

interface State {
  
}

export default class AppointmentForm extends React.PureComponent<Props, State> {
 

  render() {


    return (

      <>

        <Responsive maxWidth={640}>
        <div style={{ maxWidth: 600, margin: '10px auto' }}>
            <form 
              data-testid="appointmentForm" 
              onSubmit={this.props.handleSubmit}
            >
            <ConsultantTypes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleConsultantTypesChange}
                selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentTimes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleAppointmentTimesChange}
                selectedConsultantType={this.props.selectedConsultantType}
                selectedAppointmentTime={this.props.selectedAppointmentTime}
            /> 
            <br />
            <br />
            <AppointmentTypes
              availableSlots={this.props.availableSlots}
              handleChange={this.props.handleAppointmentTypesChange}
              selectedAppointmentType={this.props.selectedAppointmentType}
              selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentNotes 
              handleChange={this.props.handleAppointmentNotesChange}
              appointmentNotesError={this.props.appointmentNotesError}
            />
            <SubmitButton />
            </form>
          </div>
        </Responsive>

        <Responsive minWidth={641} maxWidth={768}>
        <div style={{ maxWidth: 600, margin: '24px auto' }}>
            <form 
              data-testid="appointmentForm" 
              onSubmit={this.props.handleSubmit}
            >
            <ConsultantTypes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleConsultantTypesChange}
                selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentTimes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleAppointmentTimesChange}
                selectedConsultantType={this.props.selectedConsultantType}
                selectedAppointmentTime={this.props.selectedAppointmentTime}
            /> 
            <br />
            <br />
            <AppointmentTypes
              availableSlots={this.props.availableSlots}
              handleChange={this.props.handleAppointmentTypesChange}
              selectedAppointmentType={this.props.selectedAppointmentType}
              selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentNotes 
              handleChange={this.props.handleAppointmentNotesChange}
              appointmentNotesError={this.props.appointmentNotesError}
            />
           <SubmitButton />
            </form>
          </div>
        </Responsive>

        <Responsive minWidth={769} maxWidth={992}>
        <div style={{ maxWidth: 800, margin: '24px auto' }}>
            <form 
              data-testid="appointmentForm" 
              onSubmit={this.props.handleSubmit}
            >
            <ConsultantTypes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleConsultantTypesChange}
                selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentTimes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleAppointmentTimesChange}
                selectedConsultantType={this.props.selectedConsultantType}
                selectedAppointmentTime={this.props.selectedAppointmentTime}
            /> 
            <br />
            <br />
            <AppointmentTypes
              availableSlots={this.props.availableSlots}
              handleChange={this.props.handleAppointmentTypesChange}
              selectedAppointmentType={this.props.selectedAppointmentType}
              selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentNotes 
              handleChange={this.props.handleAppointmentNotesChange}
              appointmentNotesError={this.props.appointmentNotesError}
            />
            <SubmitButton />
            </form>
          </div>
        </Responsive>
      
        <Responsive minWidth={993} maxWidth={1200}>
        <div style={{ maxWidth: 900, margin: '24px auto' }}>
            <form 
              data-testid="appointmentForm" 
              onSubmit={this.props.handleSubmit}
            >
            <ConsultantTypes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleConsultantTypesChange}
                selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentTimes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleAppointmentTimesChange}
                selectedConsultantType={this.props.selectedConsultantType}
                selectedAppointmentTime={this.props.selectedAppointmentTime}
            /> 
            <br />
            <br />
            <AppointmentTypes
              availableSlots={this.props.availableSlots}
              handleChange={this.props.handleAppointmentTypesChange}
              selectedAppointmentType={this.props.selectedAppointmentType}
              selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentNotes 
              handleChange={this.props.handleAppointmentNotesChange}
              appointmentNotesError={this.props.appointmentNotesError}
            />
            <SubmitButton />
            </form>
          </div>
        </Responsive>

        <Responsive minWidth={1201}>
        <div style={{ maxWidth: 1000, margin: '24px auto' }}>
            <form 
              data-testid="appointmentForm" 
              onSubmit={this.props.handleSubmit}
            >
            <ConsultantTypes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleConsultantTypesChange}
                selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentTimes
                availableSlots={this.props.availableSlots}
                handleChange={this.props.handleAppointmentTimesChange}
                selectedConsultantType={this.props.selectedConsultantType}
                selectedAppointmentTime={this.props.selectedAppointmentTime}
            /> 
            <br />
            <br />
            <AppointmentTypes
              availableSlots={this.props.availableSlots}
              handleChange={this.props.handleAppointmentTypesChange}
              selectedAppointmentType={this.props.selectedAppointmentType}
              selectedConsultantType={this.props.selectedConsultantType}
            />
            <br />
            <br />
            <AppointmentNotes 
              handleChange={this.props.handleAppointmentNotesChange}
              appointmentNotesError={this.props.appointmentNotesError}
            />
            <SubmitButton />
            </form>
          </div>
        </Responsive>
       
      </>
    )
  }
}
