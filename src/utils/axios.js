import axios from 'axios';
import { message } from 'antd';
// import Promise from 'promise/lib/es6-extensions.js';
let axiosIns = axios.create({});
// 添加请求拦截器
axiosIns.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    let url = config.url, token = sessionStorage.getItem("token");
    if (url.match("/student") && token) {
      config['headers'] = { ...config['headers'], 'token': token };
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosIns.interceptors.response.use(
  function (response) {
    let status = response.status,
      code = response.data && response.data.code;
    if (status === 404) {
      window.location.href = '#/404';
    }
    if (code && (code === 30001 || code === 10002 || code === 10003)) {
      message.error("登录超时，请重新登录...", 2, () => {
        sessionStorage.clear();
        window.location.href = "/";
      });
    }
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const get = ({ url, data, msg = '接口异常', headers }) => {
  return axiosIns.get(url, { 'params': { ...data, date: Date.parse(new Date()) } || { date: Date.parse(new Date()) } }, headers).then(res => {
    if ((res.data && res.data.code === 10000) || res.data.infocode === '10000') {
      return res.data;
    } else {
      message.error(res.data.message || "接口异常，请联系管理员！");
      return res.data;
    }
  }).catch(err => {
    console.error('get_err', err)
    message.error(msg);
  });
};


/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({ url, data, msg = '接口异常', headers }) => {
  return axiosIns.post(url, data, headers).then(res => {
    if ((res.data && res.data.code === 10000) || res.data.infocode === '10000') {
      return res.data;
    } else {
      message.error(res.data.message || "接口异常，请联系管理员！");
      return res.data;
    }
  }).catch(err => {
    console.error('post_err', err)
    message.error(msg);
  });
};

