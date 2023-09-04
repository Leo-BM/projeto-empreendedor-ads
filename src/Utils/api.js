import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/v1'
});

// Intercept request to add the Authorization header
instance.interceptors.request.use(
    config => {
        config.headers.Authorization = import.meta.env.VITE_APIKEY;
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default instance;
