import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      'Content-Type': 'application/json',
      Authorization: `csrftoken ${token}`
    },
    baseURL: "https://cs1build.herokuapp.com"
  });
};

 export default axiosWithAuth
      // Authorization: `Token ${token}`