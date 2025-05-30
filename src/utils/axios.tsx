import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api', 
});

// Добавляем токен из localStorage (или можешь брать из Redux)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // или из Redux
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
