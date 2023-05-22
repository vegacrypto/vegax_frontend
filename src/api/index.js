import request from '@/axios';
import qs from 'qs'

export function login(data) {
    return request({
        url: "/i/api/conf/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: data,
    });
}

export function register(data) {
    return request({
        url: "/i/api/conf/reg",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: data,
    });
}

export function chatHistory(data = {}) {
    return request({
        url: "/i/api/chat/history",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: data,
    });
}

export function chatSave(data) {
    return request({
        url: "/i/api/chat/save",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: data,
    });
}

export function chatById(data = {}) {
    return request({
        url: "/i/api/chat/bychat",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "post",
        data: data,
    });
}

export function taskList (data = {}) {
  return request({
    url: "/i/api/conf/tasks",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "get",
    data: data,
  });
}

export function setop (data = {}) {
  return request({
    url: "/i/api/chat/setop",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    method: "post",
    data: data,
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
