import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

// Polyfills
import 'core-js/modules/es.array.flat-map'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
