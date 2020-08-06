const mongoose = require('mongoose');
const Event = require('../model/Event');
const EventMocks = require('./__mocks__/EventMocks');

describe('User Model Test', () => {
  beforeAll(async () => {
    await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  })

  it('save event successfully', async () => {
    const validEvent = new Event(EventMocks.validEvent);
    const saveEvent = await validEvent.save();

    expect(saveEvent._id).toBeDefined();
    expect(saveEvent.firstName).toBe(EventMocks.validEvent.firstName);
    expect(saveEvent.lastName).toBe(EventMocks.validEvent.lastName);
    expect(saveEvent.email).toBe(EventMocks.validEvent.email);
    expect(saveEvent.date).toBe(EventMocks.validEvent.date);
  });

  it('insert event successfully, but the field does not defined in schema should be undefined', async () => {
    const eventWithInvalidField = new Event({ ...EventMocks.validEvent, gender: 'male' });
    const savedEventWithInvalidField = await eventWithInvalidField.save();
    expect(savedEventWithInvalidField._id).toBeDefined();
    expect(savedEventWithInvalidField.gender).toBeUndefined();
  });

  it('create event without firstName field should failed', async () => {
    const eventWithoutFirstNameField = new Event(EventMocks.eventWithoutFirstName);
    let err;

    try {
      const savedEventWithoutFirstNameField = await eventWithoutFirstNameField.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.firstName).toBeDefined();
  });

  it('create event without lastName field should failed', async () => {
    const eventWithoutLastNameField = new Event(EventMocks.eventWithoutLastName);
    let err;

    try {
      const savedEventWithoutLastNameField = await eventWithoutLastNameField.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.lastName).toBeDefined();
  });

  it('create event without email field should failed', async () => {
    const eventWithoutEmailField = new Event(EventMocks.eventWithoutEmail);
    let err;

    try {
      const savedEventWithoutEmailField = await eventWithoutEmailField.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('create event without date field should failed', async () => {
    const eventWithoutDateField = new Event(EventMocks.eventWithoutDate);
    let err;

    try {
      const savedEventWithoutDateField = await eventWithoutDateField.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.date).toBeDefined();
  });

  it('create event without user info inside email field should failed', async () => {
    const eventWithoutCorrectEmailField = new Event(EventMocks.eventWithoutUserInEmail);
    let err;

    try {
      const savedEventWithoutCorrectEmailField = await eventWithoutCorrectEmailField.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('create event without domain info inside email field should failed', async () => {
    const eventWithoutCorrectEmailField = new Event(EventMocks.eventWithoutDomainInEmail);
    let err;

    try {
      const savedEventWithoutCorrectEmailField = await eventWithoutCorrectEmailField.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('create event without correct date field should failed', async () => {
    const eventWithoutCorrectDateField = new Event(EventMocks.eventWithInvalidDate);
    let err;

    try {
      const savedEventWithoutCorrectDateField = await eventWithoutCorrectDateField.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.date).toBeDefined();
  });
});