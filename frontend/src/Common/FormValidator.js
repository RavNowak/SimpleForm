export default class FormValidator {
  static isEmpty(input) {
    return input.trim() === '';
  }

  static isEmailValid(input) {
    const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegexp.test(input);
  }

  static isDateValid(input) {
    try {
      return new Date(input).toJSON().slice(0, 10) >= new Date().toJSON().slice(0, 10);
    }
    catch {
      return false;
    }
  }
}