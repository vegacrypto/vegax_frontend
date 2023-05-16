import axios from "axios";

// create an axios instance
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
    timeout: 60000, // request timeout
    transformRequest: [function (data, headers) {
        return data;
    }],
});

// request interceptor
service.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        
    }
)

export default service;
