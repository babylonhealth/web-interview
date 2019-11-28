import * as React from 'react'
import { headerStyles } from '../styles/styles';

interface Props {
    logo: any
}

export class NavigationBar extends React.PureComponent<Props> {
    render() {
        return (
            <>
            <div 
                data-testid="navigationBarComponent"  
                className="app-header">
                <img 
                   data-testid="babylonLogo"  
                   src={this.props.logo.toString()} 
                   className="app-logo" 
                   alt="Babylon Health" 
                />
            </div>
            <hr 
               style={headerStyles} 
            />
            </>
        );
}}