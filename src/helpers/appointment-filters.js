export function filterByType(appointments, consultantType) {
  const appointment = appointments
    .map(appointment => appointment[consultantType])
    .flatMap(appointment => {
      return appointment
    })

  return removeDuplicates(appointment)
}

export function removeDuplicates(appointments) {
  return Array.from(new Set(appointments))
}
