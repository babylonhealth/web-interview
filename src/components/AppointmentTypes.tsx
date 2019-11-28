import * as React from 'react'
import { activeButtonStyles, headerStyles } from '../styles/styles';
import { Responsive } from 'semantic-ui-react';

interface Props {
    selectedAppointmentType: any
    selectedConsultantType: any
    handleChange: any
    availableSlots: any
}

export class AppointmentTypes extends React.PureComponent<Props> {
    render() {

          // calculate slot appointment types

          let appTypeArray = []
          let slotData = this.props.availableSlots
          let appTypeData = this.props.availableSlots

          for (let i = 0, len=appTypeData.length ; i < len; i++) {
            let appointmentType = slotData[i]['appointmentType' as any]
            appTypeArray.push(appointmentType)
          }
          let appTypeMerged = [].concat.apply([], appTypeArray as any)
          const uniqueAppointmentTypes = Array.from(new Set(appTypeMerged))

          if(uniqueAppointmentTypes.length < 1) return <p data-testid="appointmentTypesLoading">Loading...</p>
          return (

          <div data-testid="appointmentTypesComponent">
            
            
            <Responsive maxWidth={640}>
            <strong
              style={headerStyles}
            >
                Appointment Type
            </strong>
            <br />
            <br />
            <>
            {this.props.selectedConsultantType === ""
            ?
            null
            :
            <>
            {uniqueAppointmentTypes.map((appointmentType: any, i: any) => (
              <React.Fragment
                key={i}

              >
              {this.props.selectedAppointmentType === appointmentType
              ?
              <button
                data-testid="selectedAppTypeButton"
                style={activeButtonStyles}
                className="mobile-button"
                value={appointmentType}
                onClick={this.props.handleChange}
              >
               {appointmentType.charAt(0).toUpperCase() + appointmentType.slice(1)}  
              </button>
              :
              <button
                data-testid="unselectedAppTypeButton"
                style={activeButtonStyles}
                value={appointmentType}
                className="mobile-white-button"
                onClick={this.props.handleChange}
              >
                {appointmentType.charAt(0).toUpperCase() + appointmentType.slice(1)}  
              </button>
              }
              </React.Fragment>
            ))}
            </>
            }
            </>
            </Responsive>



            <Responsive minWidth={641}>
            <strong
              style={headerStyles}
            >
                Appointment Type
            </strong>
            <br />
            <br />
            <>
            {this.props.selectedConsultantType === ""
            ?
            null
            :
            <>
            {uniqueAppointmentTypes.map((appointmentType: any, i: any) => (
              <React.Fragment
                key={i}
              >
              {this.props.selectedAppointmentType === appointmentType
              ?
              <button
                data-testid="selectedAppTypeButton"
                style={activeButtonStyles}
                className="button"
                value={appointmentType}
                onClick={this.props.handleChange}
              >
               {appointmentType.charAt(0).toUpperCase() + appointmentType.slice(1)}  
              </button>
              :
              <button
                data-testid="unselectedAppTypeButton"
                style={activeButtonStyles}
                value={appointmentType}
                className="white-button"
                onClick={this.props.handleChange}
              >
                {appointmentType.charAt(0).toUpperCase() + appointmentType.slice(1)}  
              </button>
              }
              </React.Fragment>
            ))}
            </>
            }
            </>
            </Responsive>


          </div>

        );
}}