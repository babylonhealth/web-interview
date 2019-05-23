import { API_ENDPOINT } from '../../config'

export const GET_USERS = 'GET_USERS'

export const getUsers = () => {
  return dispatch => {
    dispatch({ type: GET_USERS })
    return fetch(`${API_ENDPOINT}/users`)
      .then(response => response.json())
      .then(json => dispatch(getUsersSuccess(json)))
  }
}

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

export const getUsersSuccess = data => ({
  type: GET_USERS_SUCCESS,
  data,
})

export const GET_AVAILABLE_SLOTS = 'GET_AVAILABLE_SLOTS'

export const getAvailableSlots = () => {
  return dispatch => {
    dispatch({ type: GET_AVAILABLE_SLOTS })
    return fetch(`${API_ENDPOINT}/availableSlots`)
      .then(response => response.json())
      .then(json => dispatch(getAvailableSlotsSuccess(json)))
  }
}

export const GET_AVAILABLE_SLOTS_SUCCESS = 'GET_AVAILABLE_SLOTS_SUCCESS'

export const getAvailableSlotsSuccess = data => ({
  type: GET_AVAILABLE_SLOTS_SUCCESS,
  data,
})

export const SELECT_CONSULTANT_TYPE = 'SELECT_CONSULTANT_TYPE'

export const selectConsultantType = consultantType => ({
  type: SELECT_CONSULTANT_TYPE,
  consultantType,
})

export const SELECT_TIME_SLOT = 'SELECT_TIME_SLOT'

export const selectTimeSlot = timeSlot => ({
  type: SELECT_TIME_SLOT,
  timeSlot,
})

export const SELECT_APPOINTMENT_TYPE = 'SELECT_APPOINTMENT_TYPE'

export const selectAppointmentType = appointmentType => ({
  type: SELECT_APPOINTMENT_TYPE,
  appointmentType,
})

export const SET_APPOINTMENT_NOTES = 'SET_APPOINTMENT_NOTES'

export const setAppointmentNotes = appointmentNotes => ({
  type: SET_APPOINTMENT_NOTES,
  appointmentNotes,
})

export const POST_APPOINTMENT = 'POST_APPOINTMENT'

export const postAppointment = appointment => {
  return dispatch => {
    dispatch({ type: POST_APPOINTMENT })
    return fetch(`${API_ENDPOINT}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(appointment),
    })
      .then(response => response.json())
      .then(json => dispatch(postAppointmentSuccess(json)))
  }
}

export const POST_APPOINTMENT_SUCCESS = 'POST_APPOINTMENT_SUCCESS'

export const postAppointmentSuccess = data => ({
  type: POST_APPOINTMENT_SUCCESS,
  data,
})
