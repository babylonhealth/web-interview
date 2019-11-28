import * as React from 'react'
import { headerStyles } from '../styles/styles';

interface Props {
    handleChange: any
    appointmentNotesError: any
}

export class AppointmentNotes extends React.PureComponent<Props> {
    render() {
        return (

        <div data-testid="appointmentNotesComponent" >
            <strong
                style={headerStyles}
                data-testid="appointmentNotesHeader" 
            >
                Notes
            </strong>
            <br />
            <textarea
              style={headerStyles}
              data-testid="appointmentNotesTextArea" 
              className="notes"
              placeholder="Describe your symptoms"
              onChange={this.props.handleChange}
            />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>

        );
}}