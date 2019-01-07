import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.png'
import { API_ENDPOINT } from './config'

import './App.scss'

import Home from './pages/Home'
import Appointments from './pages/Appointments'
import BookAppointment from './pages/BookAppointment'

class App extends Component {
  public componentDidMount() {
    fetch(`${API_ENDPOINT}/users/1`)
      .then(res => res.json())
      .then(user => {
        // expect the logged in user object here
      })
      .catch(() => {
        // Use an Error boundary here
      })
  }

  public render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
          </header>
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/book" component={BookAppointment} />
          </>
        </div>
      </Router>
    )
  }
}

export default App
