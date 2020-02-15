import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import ScreenFull from 'screenfull'
import {deleteUserAction} from '../../redux/action/login_action'
import './header.less'

@connect(
    (state)=>({userInfo:state.userInfo}),
    {deleteUserAction}
)

 class Header extends Component {
    logout = ()=>{
       console.log(this.props)
       this.props.deleteUserAction()
    }
    render() {
        console.log(this.props)
        return (
            <div id="header">
                <div className="header_top">

                    <span>欢迎,{this.props.userInfo.user.username}</span>
                    <Button type="link" onClick={this.logout}>退出登录</Button>
                </div>
                <div className="header_bottom"></div>
            </div>
        )
    }
}
export default Header
