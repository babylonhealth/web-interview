import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_AVAILABLE_SLOTS,
  GET_AVAILABLE_SLOTS_SUCCESS,
  SELECT_CONSULTANT_TYPE,
  SELECT_TIME_SLOT,
  SELECT_APPOINTMENT_TYPE,
  SET_APPOINTMENT_NOTES,
  POST_APPOINTMENT,
  POST_APPOINTMENT_SUCCESS,
} from '../../actions/newAppointment'

const defaultState = {
  users: [],
  usersLoading: true,
  selectedUser: null,
  consultantTypes: [
    ['GP', 'gp'],
    ['Specialist', 'specialist'],
    ['Nurse', 'nurse'],
    ['Therapist', 'therapist'],
    ['Triage Nurse', 'triage_nurse'],
    ['Specialist Nurse', 'specialist_nurse'],
  ],
  availableSlots: [],
  availableSlotsLoading: true,
  selectedConsultantType: 'gp',
  selectedTimeSlot: null,
  selectedAppointmentType: 'video',
  appointmentNotes: '',
  postingAppointment: false,
}

const newAppointment = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        usersLoading: true,
      }

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        usersLoading: false,
        selectedUser: action.data.length > 0 && action.data[0],
      }

    case GET_AVAILABLE_SLOTS:
      return {
        ...state,
        availableSlotsLoading: true,
      }

    case GET_AVAILABLE_SLOTS_SUCCESS:
      return {
        ...state,
        availableSlots: action.data,
        availableSlotsLoading: false,
        selectedTimeSlot: action.data.length > 0 && action.data[0],
      }

    case SELECT_CONSULTANT_TYPE:
      return {
        ...state,
        selectedConsultantType: action.consultantType,
      }

    case SELECT_TIME_SLOT:
      return {
        ...state,
        selectedTimeSlot: action.timeSlot,
      }

    case SELECT_APPOINTMENT_TYPE:
      return {
        ...state,
        selectedAppointmentType: action.appointmentType,
      }

    case SET_APPOINTMENT_NOTES:
      return {
        ...state,
        appointmentNotes: action.appointmentNotes,
      }

    case POST_APPOINTMENT:
      return {
        ...state,
        postingAppointment: true,
      }

    case POST_APPOINTMENT_SUCCESS:
      return {
        ...state,
        postingAppointment: false,
      }

    default:
      return state
  }
}

export default newAppointment