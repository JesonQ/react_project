import {SAV_USER} from '../action_types'

let _user = JSON.parse(localStorage.getItem('user'))
let _token = localStorage.getItem('token')

let initState = {
	user:_user || {},
	token:_token || '',
	isLogin:_user&&_token ? true : false
}

export default function(preState=initState,action){
    let {type,data} = action
    let newState;
    switch (type) {
        case SAV_USER:
            newState = {user:data.user,token:data.token,isLogin:true}
            console.log(newState)
            return newState
        default:
            return preState
    }
}

