import * as React from 'react'
import { activeButtonStyles } from '../styles/styles';

export class SubmitButton extends React.PureComponent {
    render() {
        return (

            <>
            <hr />
            <br />
            <div>
              <button
                style={activeButtonStyles}
                data-testid="submitButton"  
                className="submit-button"
                type="submit"
              >
                Book
              </button>
              <br />
              <br />
              <br />
            </div>
            </>

        );
}}