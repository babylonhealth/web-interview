import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import 'core-js/modules/es.array.flat-map'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})
