import axios from "axios";
import qs from 'qs'
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // url = base url + request url
    timeout: 60000, // request timeout
    transformRequest: [function (data, headers) {
        data['token'] = getToken() || ''
        headers['token'] = getToken() || ''
        return qs.stringify(data);
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
