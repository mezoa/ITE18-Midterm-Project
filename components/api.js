import axios from 'axios';

const API_URL = 'http://localhost:1337'; // Change this to your Strapi URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;