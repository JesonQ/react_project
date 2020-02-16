import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button,Icon,Modal} from 'antd'
import screenfull from 'screenfull'
import dayjs from 'dayjs'
import {deleteUserAction} from '../../../redux/action/login_action'
import  {QusWeather} from '../../../api/index'
import './header.less'
const {confirm} = Modal;


@connect(
    (state)=>({userInfo:state.userInfo}),
    {deleteUserAction}
)

 class Header extends Component {
     state = {
         isFull:false,
         day:dayjs().format('YYYY年 MM月DD日 HH:mm:ss '),
         weather:{pic:'',temp:''}
     }
// 退出登录
    logout = ()=>{
        confirm({
			title: '确定退出登录吗？',
			content: '退出后需要重新登录...',
			okText:'确定',
			cancelText:'取消',
			onOk:()=> {
				this.props.deleteUserAction()
			},
		});
    }
// 全屏切换
    full = ()=>{
        screenfull.toggle()
    }
    getWeather = async()=>{
      let WeatherData = await QusWeather()
      this.setState({
        weather:{pic:WeatherData.pic,temp:WeatherData.temp}
      })
    }
    componentDidMount(){
        screenfull.on('change',() => {
			const isFull = !this.state.isFull
			this.setState({isFull}) //更新全屏状态标识符
        });
        setInterval(()=>{
            this.setState({day:dayjs().format('YYYY年 MM月DD日 HH:mm:ss ')})
        },1000)
        this.getWeather()
    }
    
    render() {
        return (
            <div className="header">
                <div className="header_top">
                    <Button size="small" onClick={this.full}>
                        <Icon type={this.state.isFull ? 'fullscreen-exit' : 'fullscreen'}/>
                    </Button>
                    <span>欢迎 , {this.props.userInfo.user.username}</span>
                    <Button type="link" onClick={this.logout}>退出登录</Button>
                </div>
                <div className="header_bottom">
                    <h3>首页</h3>
                    <div className="bottom_right">
                        <span>{this.state.weather.temp}</span>
                        <img src={this.state.weather.pic} alt="天气图片"/>
                        <span>{this.state.day}</span>
                    </div>
                       
                </div>
            </div>
        )
    }
}
export default Header
