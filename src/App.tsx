/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import './App.css';
import AppointmentContainer from './components/AppointmentContainer';

const App = () => (
  <Router>
      <Switch>
        <Route exact path="/" component={AppointmentContainer} />
      </Switch>
  </Router>
);

export default App;
