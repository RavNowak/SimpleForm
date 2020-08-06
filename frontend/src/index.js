import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/AppComponent/App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import './index.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider >,
  document.getElementById('root')
);