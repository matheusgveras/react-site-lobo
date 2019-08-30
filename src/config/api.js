import axios from 'axios';

const apiservice = axios.create({
  baseURL: 'https://us-central1-matheus-veras.cloudfunctions.net/',
});

export default apiservice;
