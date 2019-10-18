import axios, { request } from './request.js';


export function getHomeMultidata() {
    return axios({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return axios({
        url: '/home/data',
        params: {
            type,
            page,
        }
    })
}