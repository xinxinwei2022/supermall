import axios from "axios";

export function request(config) {
  const indentens = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })
// 拦截器
  indentens.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  // 响应
  indentens.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  return indentens(config)
}
