import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`
    },
    // baseURL: 'http://127.0.0.1:8000/'
    // baseURL: 'https://cs1build.herokuapp.com/api/'
    baseURL: 'https://lambda-mud-test.herokuapp.com/'
  });
};