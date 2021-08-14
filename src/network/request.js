import axios from 'axios'

export function request(config, success, failure) {
  // 1.创建axios的实例对象
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  // 发送真正的网络请求
  instance(config)
    .then(res => {
      // console.log(res);
      success(res)
    })
    .catch(err => {
      // console.log(err);
      failure(err)
    })

}

