import {SAV_USER} from '../action_types'

export let  saveUserAction = (value)=>{
    localStorage.setItem('user',JSON.stringify(value.user))
	localStorage.setItem('token',value.token)
    return {type:SAV_USER,data:value}
}