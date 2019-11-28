import * as React from 'react'
import { headerStyles, activeButtonStyles } from '../styles/styles';
import { Responsive } from 'semantic-ui-react';

interface Props {
    handleChange: any
    selectedConsultantType: any
    availableSlots: any
}

export class ConsultantTypes extends React.PureComponent <Props> {
    render() {

        let consultantArray = []
        let slotData = this.props.availableSlots
        let consultantData = this.props.availableSlots
    
        // calculate unique consultant types
    
        for (let i = 0, len=consultantData.length ; i < len; i++) {
          let consultantType = slotData[i]['consultantType' as any]
          consultantArray.push(consultantType)
        }
        let merged = [].concat.apply([], consultantArray as any)
        const uniqueConsultantTypes = [...new Set(merged) as any]

        if(uniqueConsultantTypes.length < 1) return <p data-testid="consultantTypesLoading">Loading...</p>
        return (

            <div data-testid="consultantTypesComponent">
            <br />
            <br />

            <Responsive maxWidth={640}>
            <strong
                style={headerStyles}
            >
                Consultant Type
            </strong>
            <br />
            <br />
            <>
            
            {uniqueConsultantTypes.map((consultantType: any, i: any) => (
              <React.Fragment
                key={i}
              >
              {this.props.selectedConsultantType === consultantType
              ?
              <button
                style={activeButtonStyles}
                value={consultantType}
                className="mobile-button"
                onClick={this.props.handleChange}
              >
              {consultantType.charAt(0).toUpperCase() + consultantType.slice(1)}  
              </button>
              :
              <button
                style={activeButtonStyles}
                value={consultantType}
                className="mobile-white-button"
                onClick={this.props.handleChange}
              >
                {consultantType.charAt(0).toUpperCase() + consultantType.slice(1)}  
              </button>
              }
              </React.Fragment>
            ))}
            </>
            </Responsive>





            <Responsive minWidth={641}>
            <strong
                style={headerStyles}
            >
                Consultant Type
            </strong>
            <br />
            <br />
            <>
            {uniqueConsultantTypes.map((consultantType: any, i: any) => (
              <React.Fragment
                key={i}
              >
              {this.props.selectedConsultantType === consultantType
              ?
              <button
                style={activeButtonStyles}
                value={consultantType}
                className="button"
                onClick={this.props.handleChange}
              >
              {consultantType.charAt(0).toUpperCase() + consultantType.slice(1)}  
              </button>
              :
              <button
                style={activeButtonStyles}
                value={consultantType}
                className="white-button"
                onClick={this.props.handleChange}
              >
                {consultantType.charAt(0).toUpperCase() + consultantType.slice(1)}  
              </button>
              }
              </React.Fragment>
            ))}
            </>
            </Responsive>

            </div>

        );
}}