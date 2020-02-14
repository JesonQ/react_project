import axios from 'axios'
import qs from 'querystring'
import {message} from 'antd' 
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
axios.interceptors.request.use((config)=>{
    Nprogress.start()
//   console.log(config)
  let {data,method} = config
  if(method.toLowerCase() === 'post' && data instanceof Object){
    config.data = qs.stringify(data)
  }
  return config
})

axios.interceptors.response.use(
    (response)=>{
        Nprogress.done()
        // console.log(456)
        // console.log('响应成功了',response)
        return response.data
},
    (error)=>{
        Nprogress.done()
        // console.log(123)
        message.error('登录失败,请联系管理员')
        return new Promise(()=>{})
},
    )

export default axios

