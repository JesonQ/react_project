import MyAxios from './Myaxios'
import jsonp from 'jsonp'
import {WEATHER_BASE_URL,WEATHER_AK} from '../config/index'
import { message } from 'antd'
export let QusLogin  = (LoginObj)=>{ return MyAxios.post("/login",LoginObj)}

export let QusWeather = ()=>{
  let url = `${WEATHER_BASE_URL}?location=北京&output=json&ak=${WEATHER_AK}`
   return new Promise((resolve,reject)=>{
        jsonp(url,(err,data)=>{
            if(!err){
                let pic = data.results[0].weather_data[0].dayPictureUrl
                let temp = data.results[0].weather_data[0].temperature
                let weObj = {pic,temp}
                resolve(weObj)
            }else{
                message.error('天气获取失败,请联系管理员!!')
            }
        })
   })
  
}