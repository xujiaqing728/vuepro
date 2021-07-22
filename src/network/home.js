import {request} from "network/request";

export function getHomeAllData() {
    return request({
        url: '/api/index'
    })
}
