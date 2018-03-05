import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://giks-firebase.firebaseio.com/'
});

export default instance;