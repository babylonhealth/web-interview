import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.png'
import { API_ENDPOINT } from './config'

import './App.scss'

import Home from './pages/Home'
import Appointments from './pages/Appointments'
import BookAppointment from './pages/BookAppointment'

export interface AuthUser {
  avatar: string
  firstName: string
  lastName: string
}

interface State {
  user: AuthUser | null
}

class App extends Component<{}, State> {
  public state = {
    user: null,
  }

  public componentDidMount() {
    fetch(`${API_ENDPOINT}/users/1`)
      .then(res => res.json())
      .then(user => {
        // expect the logged in user object here
        this.setState({ user })
      })
      .catch(() => {
        // handle failed API call here
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
            <Route
              exact
              path="/"
              render={props => <Home user={this.state.user} />}
            />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/book" component={BookAppointment} />
          </>
        </div>
      </Router>
    )
  }
}

export default App
