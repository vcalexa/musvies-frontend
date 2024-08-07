// src/api.js
import axios from 'axios';

// Create an instance of axios
const api = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API call: Fetch movies
export const fetchMovies = async () => {
  try {
    const response = await api.get('/movies');
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Example API call: Fetch music
export const fetchMusic = async () => {
  try {
    const response = await api.get('api/music');
    return response.data;
  } catch (error) {
    console.error('Error fetching music:', error);
    throw error;
  }
};

export default api;
