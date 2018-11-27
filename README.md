# Babylon Web technical recruitment test

Thanks for taking the time to complete our frontend coding test!

For this challenge we are asking you to build a page from the Babylon website; the appointment-booking page! Though it has been slightly modified, this is very similar to what we are currently buildling at Babylon.

## Task

* We have provided you with a designs folder that display what we expect the page to look like. The task is only for mobile screens up to **480px** in width so don't worry about displaying in larger screens.
* Use our mock API (defined in `config.js`) to display the **User's information** in the page.
* Use the API to send a request for **Booking an appointment**.

## Setup

We recommend using NVM for managing node versions on your machine.

```
brew install nvm
```

...and installing the required node version with the following command:

```
nvm install
```

This repo is using Yarn as it's package manager.

```
brew install yarn
```

Installing packages:

```
yarn install
```

## Client implementation

We would like you to use React. Feel free to add whatever libraries you think are needed for the task's completion
We have provided you with a barebones react project to work on.
To run the client:

```
yarn start
```

We have added [SASS](http://sass-lang.com/) to the client which allows you to re-use variables in stylesheets. We have also provided some useful constants in [constants.scss](./src/constants.scss).

### Design

The final design of the client should look and feel like the design files we have provided in `/design`.

### Pages

* homepage: `design/homepage.png`
	* menu: `design/menu.png`
* book an appointment: `design/new-appointment.png`
* list appointments: `design/appointments.png`

## API

### `GET /users/:userId`

Returns a `user` object with the following info:

* `firstName`: `String` of the user's first name.
* `lastName`: `String` of the user's last name.
* `avatar`: `String`. Base64 representation of the user's avatar image.
* `dateOfBirth`: `Date`. The user's Date of Birth.
  _NOTE_: `userId` can be any Integer number; the results will not be affected but it **must** be present in the request's endpoint.

### `GET /availableSlots`

Returns:

* `Array` of `Date ISO 8601` that represent the available appointment slots.

### `POST /appointments`

Expects an object in the request's body with the following information:

* `userId`: `Int`. the user's ID that this appointment is for
* `dateTime`: The user's selected time slot as a `Date ISO 8601`.
* `notes`: `String`. Any notes the user added when booking. _note_: not required, can be null.
  The endpoint responds with a 200 status on success.
* `type`: `String`. The type of the appointment like `GP appointment` or `Physio appointment`.

## Bonus points

If you feel like spending a bit more time on this then here are some additions you can make to the page!

#### Pages

* edit family members: `design/edit-family-members.png`
* book an appointment for family member: `design/new-appointment-change-family-member.png`

#### Bonus API

* There is an extra endpoint in our api at: `GET /users/:userId/family-members`. This will return an array of user Id(s) that represent the user's family members. In the design, add the 'Change' button next to the user's name in `design/new-appointment.png`. When pressed, this should allow you to choose a family member instead of the user. This should be reflected in your final `POST` request, where the `userId` should be the family member's rather than the user's.

* Feel free to comment and iterate on the design; we would love to hear your opinion about any aspect of this page.
