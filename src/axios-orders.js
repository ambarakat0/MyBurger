import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://myburger-50f97-default-rtdb.firebaseio.com/'
});

export default instance;