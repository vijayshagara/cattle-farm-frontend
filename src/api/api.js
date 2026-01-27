import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://toral-cattle-cow-farm.up.railway.app/api',
});
