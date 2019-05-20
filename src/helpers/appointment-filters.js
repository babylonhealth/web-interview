import timeFormatter from './time-formatter'

export function filterByType(appointments, consultantType) {
  const appointment = appointments
    .map(appointment => appointment[consultantType])
    .flatMap(appointment => {
      if (consultantType === 'time') {
        return timeFormatter(appointment)
      } else {
        return appointment
      }
    })

  return removeDuplicates(appointment)
}

export function removeDuplicates(appointments) {
  return Array.from(new Set(appointments))
}
