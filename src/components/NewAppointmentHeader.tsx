import * as React from 'react'
import { headerStyles } from '../styles/styles'
import { Responsive } from 'semantic-ui-react';

interface Props {
    user: any
}


export class NewAppointmentHeader extends React.PureComponent<Props> {
    render() {
        return (
        <>
        
        
        <br />  
        <br /> 
        <Responsive maxWidth={640}>
        <h2 
            data-testid="newAppointmentHeader"
            className="mobile-new-appointment-header"
            style={headerStyles}
        >
            New appointment
        </h2>
       {this.props.user &&
        <div 
            data-testid="userPanel"
            className="user-panel"
        >
          <img  
            data-testid="userAvatar"
            src={this.props.user.avatar} 
            className="user-image" 
            alt="user" 
          />
          <h2
            data-testid="userName" 
            style={headerStyles} 
            className="user-name"
          >
          {this.props.user.firstName} {this.props.user.lastName}
          </h2>
        </div>
        }
          <br />
        <hr 
           style={headerStyles} 
        />
        </Responsive>


        <Responsive minWidth={641}>
        <h2 
            data-testid="newAppointmentHeader"
            className="new-appointment-header"
            style={headerStyles}
        >
            New appointment
        </h2>
        
        <div 
            data-testid="userPanel"
            className="user-panel"
        >
          <img 
            data-testid="userAvatar"
            src={this.props.user.avatar} 
            className="user-image" 
            alt="user" 
         />
          <h2 
            data-testid="userName"
            style={headerStyles}
            className="user-name"
          >
          {this.props.user.firstName} {this.props.user.lastName}
          </h2>
        </div>
        
        <br />
        <hr 
           style={headerStyles} 
        />
        </Responsive>


        </>
        
        );
}}