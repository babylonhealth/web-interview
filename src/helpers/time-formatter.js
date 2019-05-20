import { format } from 'date-fns'

const formatTime = date => format(date, 'HH:mm')

export default formatTime
