import React from 'react';
import styles from './Form.module.scss';
import FormValidator from '../../Common/FormValidator';
import { EventService } from '../../Services/eventService';
import { connect } from 'react-redux';
import { setEvent } from '../../Redux/action';
import {ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      date: null,
      errors: {
        firstName: ' ',
        lastName: ' ',
        email: ' ',
        date: ' ',
      },
      isFormValid: false
    }
  }

  handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'firstName':
        errors.firstName = FormValidator.isEmpty(value) ? 'This field is required' : ' ';
        break;
      case 'lastName':
        errors.lastName = FormValidator.isEmpty(value) ? 'This field is required' : ' ';
        break;
      case 'email':
        errors.email = !FormValidator.isEmailValid(value) ? 'Invalid email format' : ' ';
        break;
      case 'date':
        errors.date = !FormValidator.isDateValid(value) ? 'Selected date from the past' : ' ';
        break;
    }

    this.setState({ [ name ]: value, errors }, () => {
      this.setState({ isFormValid: this.isFormValid() })
    });
  }

  wasFormTouched = () => {
    return this.state.firstName !== null && this.state.lastName !== null && this.state.email !== null && this.state.date !== null;
  }

  isFormValid = () => {
    let valid = true;

    Object.values(this.state.errors).forEach(val => {
      if (val !== ' ') {
        valid = false;
        return;
      }
    })

    return valid && this.wasFormTouched();
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const eventData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      date: this.state.date
    }

    try {
      const response = await EventService.send(eventData);

      //
      // Save the data in the stoore - could be usefull in more complex case
      //
      this.props.setEvent(response.data);
      
      ToastsStore.success("Added new event")
    }
    catch (err) {
      console.log(err)
    }
  }

  render = () => {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Event Form</h2>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.singleInputField}>
            <label className={styles.label} htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="John" name="firstName" className={styles.themeInput} onChange={this.handleChange}></input>
            <p id="firstNameError" className={styles.errorInfo}>{this.state.errors.firstName}</p>
          </div>
          <div className={styles.singleInputField}>
            <label className={styles.label} htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Doe" name="lastName" className={styles.themeInput} onChange={this.handleChange}></input>
            <p id="lastNameError" className={styles.errorInfo}>{this.state.errors.lastName}</p>
          </div>
          <div className={styles.singleInputField}>
            <label className={styles.label} htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="example@domain.com" name="email" className={styles.themeInput} onChange={this.handleChange}></input>
            <p id="emailError" className={styles.errorInfo}>{this.state.errors.email}</p>
          </div>
          <div className={styles.singleInputField}>
            <label className={styles.label} htmlFor="date">Event date</label>
            <input type="date" id="date" name="date" className={styles.themeInput} min={new Date().toJSON().slice(0, 10)} onChange={this.handleChange}></input>
            <p id="dateError" className={styles.errorInfo}>{this.state.errors.date}</p>
          </div>
          <button id="submitButton" disabled={!this.state.isFormValid} type="submit" className={styles.themeButton}>Submit</button>
          <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.TOP_RIGHT}/>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setEvent: (eventData) => dispatch(setEvent(eventData))
  }
}

export default connect(null, mapDispatchToProps)(Form);
export { Form };