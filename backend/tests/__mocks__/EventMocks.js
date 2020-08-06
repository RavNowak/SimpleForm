const validEvent = {
  firstName: 'Joe',
  lastName: 'Doe',
  email: 'example@email.com',
  date: new Date()
}

const eventWithoutFirstName = {
  lastName: 'Doe',
  email: 'example@email.com',
  date: new Date()
}

const eventWithoutLastName = {
  firstName: 'Joe',
  email: 'example@email.com',
  date: new Date()
}

const eventWithoutEmail = {
  firstName: 'Joe',
  lastName: 'Doe',
  date: new Date()
}

const eventWithoutDate = {
  firstName: 'Joe',
  lastName: 'Doe',
  email: 'example@email.com',
}

const eventWithoutUserInEmail = {
  firstName: 'Joe',
  lastName: 'Doe',
  email: '@email.com',
  date: new Date()
}

const eventWithoutDomainInEmail = {
  firstName: 'Joe',
  lastName: 'Doe',
  email: 'example@.com',
  date: new Date()
}

const eventWithInvalidDate = {
  firstName: 'Joe',
  lastName: 'Doe',
  email: 'example@.com',
  date: '2020-08-11x'
}

module.exports = {
  validEvent,
  eventWithoutFirstName,
  eventWithoutLastName,
  eventWithoutEmail,
  eventWithoutDate,
  eventWithoutUserInEmail,
  eventWithoutDomainInEmail,
  eventWithInvalidDate
}