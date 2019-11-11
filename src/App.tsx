import React, { Component } from 'react'

import { ModelService } from 'services/model/model.service'

import { User } from 'components/user/user.component'

import 'App.scss'
import { TopBar } from 'components/top-bar/top-bar.component'
import { UserType } from 'types/user.type'

export default class App extends Component {
  modelService: any
  user: UserType

  constructor(props: Component) {
    super(props)

    this.modelService = ModelService

    this.state = {
      userId: 1,
      selectedAppointmentType: 'gp',
      availableSlots: [],
    }

    this.user = {
      avatar: '',
      firstName: 'Jane',
      secondName: 'Doe',
    }
  }

  componentDidMount() {
    this.modelService
      .fetch('availableSlots')
      .then((availableSlots: string[]) => {
        this.setState({ availableSlots })
      })
  }

  onClick() {
    this.setState({ selectedAppointmentType: 'gp' })
  }

  render() {
    return (
      <div className="app">
        <TopBar />
        <h1 className="heading heading--large">New Appointment</h1>
        <User user={this.user} />
      </div>
    )
  }
}
