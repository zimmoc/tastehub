import axios from 'axios';

axios.defaults.baseURL = 'https://tastehub-drf-6b3e52885b64.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
