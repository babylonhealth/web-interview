import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

import registerServiceWorker from './registerServiceWorker'
import AppointmentContainer from './components/AppointmentContainer'

ReactDOM.render(
        <AppointmentContainer />, 
document.getElementById('root'))
registerServiceWorker()
