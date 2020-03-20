import axios from 'axios'
import qs from 'qs'
import {s_set} from '../public/index'
 
axios.defaults.timeout = 5000 // 响应时间
import { Form } from 'element-ui'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' //设置请求头

axios.defaults.baseURL = 'https://h5.horizou.cn/' //  配置接口地址

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    // 在发送请求之前做某件事

    //配置token
    // 如果session中存在token就配置到请求中   
  if(sessionStorage.getItem("token")){
    config.headers['Authorization'] = sessionStorage.getItem("token")
  }
  config.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93d3cuaG9yaXpvdS5jbiIsImF1ZCI6IjEyNy4wLjAuMSIsImlhdCI6MTU2ODk3MDI2NCwibmJmIjoxNTY4OTcwMjY3LCJleHAiOjk2MTU2ODk3MDI2NCwidXNlcl9pZCI6MX0.yX-ZYall9rEr8RJEjnVeGhoS_1XOKkCbCuehL3nsaTM';
  
  if (config.method === 'post') { 

      config.data = qs.stringify(config.data)

  } 

  return config

},(error) => {

  console.log('错误的传参')

  return Promise.reject(error)

})
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
// 对响应数据做些事
  if (!res.data.success) {
    return Promise.resolve(res)
  } return res
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error)
})

// 返回一个Promise(发送post请求)
export function fetchPost (url, params,name) { 
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response)
         //把所有通过psot请求到数据全部存在session中
         s_set(name,response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
    return axios.post
  })
}
// 返回一个Promise(发送get请求)
export function fetchGet (url, param,name) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response)
         //把所有通过git请求到数据全部存在session中
         s_set(name,response)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
export default {
  fetchPost,
  fetchGet
}
