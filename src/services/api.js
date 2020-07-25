import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/rafacdomin/test/',
});

export default api;
