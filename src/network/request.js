import axios from 'axios'

export function request(config) {
    // 1.创建axios的实例
    const instance = axios.create({
        baseURL: 'https://api.shop.eduwork.cn',
        timeout: 5000
    })

    // 2.axios的拦截器
    // 2.1.请求拦截的作用
    instance.interceptors.request.use(config => {
        // 如果有接口需要认证才能访问，就在这里统一设置
        return config
    }, err => {
        console.log(err);
    })

    // 2.2.响应拦截
    instance.interceptors.response.use(res => {
        console.log(res.data);
        return res.data;
    }, err => {
        // 如果需要授权才可以访问的接口，统一去LOGIN授权
        // 如果有错误，这里处理，显示错误信息
        console.log(err);
    })

    // 3.发送真正的网络请求
    return instance(config)
}