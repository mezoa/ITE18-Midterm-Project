import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL; // Change this to your Strapi URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;