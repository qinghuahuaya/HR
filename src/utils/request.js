
// create an axios instance
// 创建axios实例
// request interceptor
// 请求拦截器
// response interceptor
// 响应拦截器


// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store';
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, 
  // baseURL: 'http://ihrm-java.itheima.net',
  // 设置axios请求的基础的基础地址
  timeout: 5000 // 定义5秒超时
}) // 创建一个axios的实例
// service.interceptors.request.use() // 请求拦截器


// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(store);
  const token = store.state.user.token
  if (token) {
    console.log(config);
    config.headers.Authorization= `Bearer ${token}`
  }
  return config
  }, function (error) {
  // 对请求错误做些什么return Promise.reject(error);
  });


// 添加响应拦截器
service.interceptors.response.use(function (response) {
	// 对响应数据做点什么
  // 2xx范围内的状态码都会触发该函数
  //  根据是否有success:false来判断是否成功
  // console.log(response);
  // 1. 判断操作是否成功
  if ( response.data.success === false) {
    return Promise.reject(response.data.message)
  }
  return response.data
}, function (error) {
  // 超出2xx范围状态码都会触发函数
	// 对响应错误做点什么
  return Promise.reject(error);
});
// service.interceptors.response.use() // 响应拦截器


export default service // 导出axios实例
