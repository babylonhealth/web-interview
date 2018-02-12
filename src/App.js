import React, { Component } from 'react'

import logo from './logo.svg'
import { API_ENDPOINT_DEV } from './config'
import './App.scss'

class App extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    fetch(`${API_ENDPOINT_DEV}/user/123`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // TODO: Handle response here
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <h1>This is where your code goes!</h1>
      </div>
    )
  }
}

export default App
