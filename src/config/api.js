import axios from 'axios';

const apiservice = axios.create({
  baseURL: 'https://opentdb.com/',
});

export default apiservice;
