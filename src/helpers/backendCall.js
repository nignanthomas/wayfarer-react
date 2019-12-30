import axios from 'axios';

export default axios.create({
  baseURL: 'https://wayfarer-adc-nthomas.herokuapp.com/api/v2',
});
