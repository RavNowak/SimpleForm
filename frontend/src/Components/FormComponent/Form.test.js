import React from 'react';
import { mount } from 'enzyme';
import { Form } from './Form';

describe('There should be no initial values inside inputs', () => {
  it('input for first name has no initial value', () => {
    const form = mount(<Form />);
    const firstNameInput = form.find('#firstName');
    
    expect(firstNameInput.text()).toEqual('');
  });
  
  it('input for last name has no initial value', () => {
    const form = mount(<Form />);
    const lastNameInput = form.find('#lastName');
    
    expect(lastNameInput.text()).toEqual('');
  });
  
  it('input for email has no initial value', () => {
    const form = mount(<Form />);
    const emailInput = form.find('#email');
    
    expect(emailInput.text()).toEqual('');
  });
  
  it('input for date has no initial value', () => {
    const form = mount(<Form />);
    const dateInput = form.find('#date');
    
    expect(dateInput.text()).toEqual('');
  });
});

describe('There should be no error messages when form is untouched', () => {
  it('input for first name has no initial value', () => {
    const form = mount(<Form />);
    const firstNameError = form.find('#firstNameError');
    
    expect(firstNameError.text()).toEqual(' ');
  });
  
  it('input for last name has no initial value', () => {
    const form = mount(<Form />);
    const lastNameError = form.find('#lastNameError');
    
    expect(lastNameError.text()).toEqual(' ');
  });
  
  it('input for email has no initial value', () => {
    const form = mount(<Form />);
    const emailError = form.find('#emailError');
    
    expect(emailError.text()).toEqual(' ');
  });
  
  it('input for date has no initial value', () => {
    const form = mount(<Form />);
    const dateError = form.find('#dateError');
    
    expect(dateError.text()).toEqual(' ');
  });
});

describe('There should be different errors when inputs values are not valid', () => {
  it('first name can not be empty', () => {
    const form = mount(<Form />);
    const firstNameInput = form.find('#firstName');
    const firstNameError = form.find('#firstNameError');

    firstNameInput.simulate('change', {target: { name:'firstName', value: ' '}});

    expect(firstNameError.text()).toEqual('This field is required');
  });

  it('last name can not be empty', () => {
    const form = mount(<Form />);
    const lastNameInput = form.find('#lastName');
    const lastNameError = form.find('#lastNameError');

    lastNameInput.simulate('change', {target: { name:'lastName', value: ' '}});

    expect(lastNameError.text()).toEqual('This field is required');
  });

  it('email can not be empty', () => {
    const form = mount(<Form />);
    const emailInput = form.find('#email');
    const emailError = form.find('#emailError');
    
    emailInput.simulate('change', {target: { name:'email', value: ' '}});

    expect(emailError.text()).toEqual('Invalid email format');
  });

  it('email must contain user name', () => {
    const form = mount(<Form />);
    const emailInput = form.find('#email');
    const emailError = form.find('#emailError');
    
    emailInput.simulate('change', {target: { name:'email', value: '@domain.com'}});

    expect(emailError.text()).toEqual('Invalid email format');
  });

  it('email must contain domain', () => {
    const form = mount(<Form />);
    const emailInput = form.find('#email');
    const emailError = form.find('#emailError');
    
    emailInput.simulate('change', {target: { name:'email', value: 'example@.com'}});

    expect(emailError.text()).toEqual('Invalid email format');
  });

  it('date can not be from the past', () => {
    const form = mount(<Form />);
    const dateInput = form.find('#date');
    const dateError = form.find('#dateError');
    
    dateInput.simulate('change', {target: { name:'date', value: '2000-04-01'}});

    expect(dateError.text()).toEqual('Selected date from the past');
  });
});

describe('Submit button should be disabled when form is untouched', () => {
  it('button is disabled', () => {
    const form = mount(<Form />);
    const submitButton = form.find('#submitButton');
    
    expect(submitButton.prop('disabled')).toBe(true);
  });
});

