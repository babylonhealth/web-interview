import * as React from 'react'
import { activeButtonStyles } from '../styles/styles';

interface Props {
    handleChange: any
    selectedAppointmentTime: any
    slot: any
    monthNames: any
}

export class AppointmentTimeButton extends React.PureComponent<Props> {
    render() {

        return (
            <>
            {!this.props.slot || !this.props.slot.time ?
            null
            :
            <>
            {this.props.selectedAppointmentTime === this.props.slot.time
            ?
            <button
                data-testid="selectedTimeButton"
                style={activeButtonStyles}
                className="button"
                value={this.props.slot.time}
                onClick={this.props.handleChange}
            >
            {new Date(this.props.slot.time).toLocaleDateString()
            === 
            new Date().toLocaleDateString()
            ?
                <>Today {new Date(this.props.slot.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </>
            :
                <> {new Date(this.props.slot.time).getDate()} {this.props.monthNames[new Date(this.props.slot.time).getMonth()]}, {new Date(this.props.slot.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </>
            }  
            </button>
            :
            <button
                data-testid="unselectedTimeButton"
                style={activeButtonStyles}
                className="white-button"
                value={this.props.slot.time}
                onClick={this.props.handleChange}
            >
            {new Date(this.props.slot.time).toLocaleDateString()
            === 
            new Date().toLocaleDateString()
            ?
                <>Today {new Date(this.props.slot.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </>
            :
                <>{new Date(this.props.slot.time).getDate()} {this.props.monthNames[new Date(this.props.slot.time).getMonth()]}, {new Date(this.props.slot.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </>
            }  
            </button>
            }

            </>
            }
            </>
        );
}}