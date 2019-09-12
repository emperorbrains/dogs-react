import axios from 'axios';
import { BASE_URL } from '../config';

const axiosApi = axios.create({
  withCredentials: false,
  baseURL: `${BASE_URL}/`,
});

export default axiosApi;
