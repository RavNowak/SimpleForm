const axios = require('axios');

export const EventService = {
  send: (eventData) => {
    return axios.post('http://localhost:8080/event', {
      eventData
    });
  }
}