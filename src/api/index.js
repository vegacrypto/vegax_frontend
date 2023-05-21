import request from '@/axios';
import qs from 'qs'

export function login(data) {
    return request({
        url: "/i/api/conf/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: qs.stringify(data),
    });
}

export function register(data) {
    return request({
        url: "/i/api/conf/reg",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: qs.stringify(data),
    });
}

// export function getJson(uri) {
//     return request({
//         url: uri,
//         withCredentials: false,
//         cache: false,
//         method: "get",
//     });
// }
