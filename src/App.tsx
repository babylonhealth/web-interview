import React, { Component } from 'react'

import { ModelService } from 'services/model/model.service'

import { User } from 'components/user/user.component'

import 'App.scss'
import { TopBar } from 'components/top-bar/top-bar.component'

export default class App extends Component<Component> {
  modelService: any

  constructor(props: Component) {
    super(props)

    this.modelService = ModelService

    this.state = {
      userId: 1,
      selectedAppointmentType: 'gp',
      availableSlots: [],
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
      </div>
    )
  }
}
