import MyAxios from './Myaxios'

export let QusLogin  = (LoginObj)=>{
    // console.log(LoginObj)
    return MyAxios.post("/login",LoginObj)
}