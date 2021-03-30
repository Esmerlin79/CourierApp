import axios from 'axios'

// axios.defaults.baseURL = 'https://courierdemo.azurewebsites.net/api';
axios.defaults.baseURL = 'https://localhost:44329/api/Usuario';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*' // for all requests

const requestGeneric = {
    get: (url) => axios.get(url),
    post: (url, body) => axios.post(url, body)
};

export default requestGeneric;