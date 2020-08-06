import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import FormComponent from '../FormComponent/Form';

it('includes FormComponent', () => {
  const app = shallow(<App />);
  expect(app.containsMatchingElement(<FormComponent />)).toEqual(true)
});
