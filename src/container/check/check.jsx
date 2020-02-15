import React,{Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
//check组件是一个高阶组件:1.接收一个组件。2.返回一个新组件
//check组件能够对传入的组件，进行权限检查：
//例如：未登录，不能看admin; 登录了，不能看login

export default function (OldComponent){
    @connect(
        state => ({isLogin:state.userInfo.isLogin}),
        {}
    )
    class NewComponent extends Component{
       render(){
           console.log(this.props)
           const {isLogin} = this.props
           const {pathname} = this.props.location
           if(isLogin && pathname === '/login')return <Redirect to="/admin"/>
           if(!isLogin && pathname === '/admin')return <Redirect to="/login"/>
           return <OldComponent {...this.props}/>
        } 

    }
    return NewComponent
}