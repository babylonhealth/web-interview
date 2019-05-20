export default function post(url, body) {
  fetch(url, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body,
  }).catch(error => {
    console.error(error)
  })
}
// exmaple working body
// `userId=${this.state.user[0].id}&dateTime=${this.state.selectedAppointmentTime}&notes=${this.state.notes}&type=${this.state.selectedAppointmentType}`
