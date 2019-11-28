# NOTES

## How long did it take?

- c.20 hours

## Overview

Project structure

- Created App.tsx component with react router capability
- Set AppointmentContainer as parent component / route for our form
- Created subcomponents for each section of the form
    - Navigation Bar
    - New Appointment Header
    - Consultant Types
    - Appointment Times
        - Created 2 subcomponents (Appointment Time Button and Appointment Time Mob Button)
        - Used this as the example for testing 
        - Given more time I would have followed this process for buttons in
            - Consultant Types
            - Appointment Type 
    - Appointment Types
    - Appointment Notes
    - Submit Button

Get requests

- Amended get requests to use async await 
- Added a loading state item for each request
- Conditionally rendered views depending on whether get requests were successful or not
- If get is successful the loading state was set to false (set to true as default)
- Started doing this in AppointmentContainer (see commented out code)
- Decide to move conditional rendereing into sub components instead
- Added catch statement to console log the error

Loops

- Consultant types
    - Decided to identify unique consultant types in appointments
        - Created a for loop to get an array of arrays with all consultant types
        - Used concat to merge all of the consultant type values into one array
        - Used ... new Set to get only the unique consultant types values from the merged array
    - This approach will future proof the app for additional consultant types being added

Date and time
- Conditionally rendered date and time availability based on consultant type
- Fixed the date and time for loop by swapping i and j in initial template provided

- Appointment types
    - Used the same pattern for appointment types as used for consultant types
    - If I had more time I'd identify unique appointment types available for each individual appointment

handleValidation

- Checked whether patient had selected a consultant type prior to clicking book - conditionally rendered consultant type error message if false
- Checked whether patient had selected a date and time prior to clicking book - conditionally rendered date and time error message if false
- Check whether patient had selected an appointment type prior to clicking book - conditionally rendered appointment type error message if false
- Checked whether patient had submitted an appointment note prior to clicking book and appointment - conditionally rendered an error message

handleSubmit

- Added validation check in handle Submit method
- If validation checks were successful then conditionally performed post request
- Used axios.post to create a post request and submit object to ${API_ENDPOINT}/appointments
- re set the state back to initial values
- In future would either redirect to another route or provide a success message

Filters

- Included values in state for consultant type, date and time, and appointment type
- Set state using handle change methods passed down to child components when buttons clicked
- Results of times and data are filtered using for loop

Styling

- Implemented styling to match design provided
- Used Responsive component from semantic ui react
- With more time I'd make the from a multi step wizard and map through consultant type, date and time, and appointment type


Testing
- Implemented snapshot testing for all components
- Used React Testing Library render components
- Implemented mock fetch for availableSlot 
- Had trouble getting the user request data object to match the mock object
- Tested mapping lists for consultant type, date and time, and appointment type
- Tested loading states for consultant type, date and time, and appointment type
- Test submit form - issue with shape of data submitted - left a comment
- With more time I'd create the test for the axios.push request

Packages
- Added Typescript to package
