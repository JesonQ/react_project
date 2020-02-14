import MyAxios from './Myaxios'

export let QusLogin  = (LoginObj)=>MyAxios.post("/login",LoginObj)