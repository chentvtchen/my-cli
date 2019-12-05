import axios from 'axios';
import store from '@/store';

const service = axios.create({
  // api的base_url
  baseURL: process.env.BASE_API,
  // 请求超时时间
  timeout: 10000
});

// request 拦截器
service.interceptors.request.use(
  (config) => {
    // 自定义一些config配置
    // loading + 1
    store.dispatch('SetLoading', true);

    return config;
  },
  (error) => {
    //  这里处理一些请求出错的情况
    // loading 清 0
    setTimeout(() => {
      store.dispatch('SetLoading', 0);
    }, 300);

    console.log(error);
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 处理一些response正常返回时候的逻辑

    // loading - 1
    store.dispatch('SetLoading', false);
    return res;
  },
  (error) => {
    // 处理response出错的逻辑

    // loading - 1
    store.dispatch('SetLoading', false);

    return Promise.reject(error);
  }
);

export default service;
