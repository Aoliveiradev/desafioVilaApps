import axios from 'axios';
const baseUrl = 'https://63707eb008218c267e005b81.mockapi.io';

// Passing configuration object to axios
axios({
  method: 'get',
  url: `${baseUrl}/api/ajaxCalendarEvents/callendarEvents/`,
}).then(response => {
  console.log('pqp123', response.data);
});

// // Invoking get method to perform a GET request
// axios.get(`${baseUrl}/api/users/1`).then(response => {
//   console.log(response.data);
// });
