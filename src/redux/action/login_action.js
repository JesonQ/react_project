import {SAV_USER,DEL_USER} from '../action_types'

export let  saveUserAction = (value)=>{
    localStorage.setItem('user',JSON.stringify(value.user))
    localStorage.setItem('token',value.token)
    // console.log(value)
    return {type:SAV_USER,data:value}
}

export let  deleteUserAction = (value)=>{
	localStorage.clear()
    return {type:DEL_USER,data:''}
}