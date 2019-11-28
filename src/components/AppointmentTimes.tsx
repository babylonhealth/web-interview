import * as React from 'react'
import { headerStyles } from '../styles/styles';
import { Responsive } from 'semantic-ui-react';
import { AppointmentTimeMobButton } from './AppointmentTimeMobButton';
import { AppointmentTimeButton } from './AppointmentTimeButton';

interface Props {
    handleChange: any
    selectedConsultantType: any
    selectedAppointmentTime: any
    availableSlots: any
}

export class AppointmentTimes extends React.PureComponent <Props> {

    render() {

            // calculate matching slots

            let slots = []
            let slotData = this.props.availableSlots
                
            for (let i = 0, len=slotData.length ; i < len; i++) {
                let conType = slotData[i]['consultantType' as any]
                for ( let j = 0; j < conType.length; j++) {
                if (
                    slotData[i]['consultantType' as any][j] ===
                    this.props.selectedConsultantType
                ) {
                    slots.push(this.props.availableSlots[i])
                }
                }
            } 


        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];

        if(slots.length < 1) return <p data-testid="appointmentTimesLoading">Loading...</p>
        return (
            <div data-testid="appointmentTimesComponent">
            <Responsive maxWidth={750}>
            <strong
                style={headerStyles}
            >
                    Date and time
            </strong>
            <br />
            <br />
              <>
              {slots.map((slot: any) => (
                <React.Fragment
                    key={slot.id}
                >
                  <AppointmentTimeMobButton
                    handleChange={this.props.handleChange}
                    selectedAppointmentTime={this.props.selectedAppointmentTime}
                    slot={slot}
                    monthNames={monthNames}
                  />
                </React.Fragment>
               ))}
                </>
                </Responsive>


                <Responsive minWidth={751}>
                    <strong
                        style={headerStyles}
                    >
                            Date and time
                    </strong>
                    <br />
                    <br />
                    
                    <>
                    {slots.map((slot: any) => (
                        <React.Fragment
                            key={slot.id}
                        >
                        <AppointmentTimeButton 
                            handleChange={this.props.handleChange}
                            selectedAppointmentTime={this.props.selectedAppointmentTime}
                            slot={slot}
                            monthNames={monthNames} 
                        />
                        </React.Fragment>
                    ))}
                        </>
                </Responsive>
          </div>
        );
    }
}