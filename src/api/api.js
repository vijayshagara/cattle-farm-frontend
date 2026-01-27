import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.base_url,
});
