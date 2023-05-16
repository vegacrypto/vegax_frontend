import request from '@/axios';
import qs from 'qs'

export function getSignMsg(data) {
    return request({
        url: "/api/v1/getSign",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: qs.stringify(data),
    });
}

export function submit(data) {
    return request({
        url: "/api/v1/submit",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: qs.stringify(data),
    });
}

export function check(data) {
    return request({
        url: "/api/v1/check",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "get",
        params: data,
    });
}

export function getJson(uri) {
    return request({
        url: uri,
        withCredentials: false,
        cache: false,
        method: "get",
    });
}
