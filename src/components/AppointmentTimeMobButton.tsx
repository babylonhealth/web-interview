import * as React from 'react'
import { activeButtonStyles } from '../styles/styles';

interface Props {
    handleChange: any
    selectedAppointmentTime: any
    slot: any
    monthNames: any
}

export class AppointmentTimeMobButton extends React.PureComponent<Props> {
    
    render() {
      
        return (

            <>
            {!this.props.slot || !this.props.monthNames ?
            null
            :
            <>
                 {this.props.selectedAppointmentTime === this.props.slot.time
                 ?
                 <button
                   data-testid="selected-mob-button" 
                   style={activeButtonStyles}
                   className="mobile-button"
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
                    data-testid="unselected-mob-button" 
                    style={activeButtonStyles}
                    className="mobile-white-button"
                    value={this.props.slot.time}
                    onClick={this.props.handleChange}
                 >
                   {new Date(this.props.slot.time).toLocaleDateString()
                        === 
                        new Date().toLocaleDateString()
                        ?
                        <>Today, {new Date(this.props.slot.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </>
                        :
                        <> {new Date(this.props.slot.time).getDate()} {this.props.monthNames[new Date(this.props.slot.time).getMonth()]}, {new Date(this.props.slot.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} </>
                        }  
                 </button>
                 }
                 </>
                 }
                 </>
            
        );
}}