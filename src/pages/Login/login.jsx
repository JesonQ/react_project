import React, { Component } from 'react'
import './css/login.less'
import logo from './imgs/logo.png'
import {saveUserAction} from '../../redux/action/login_action'
import { Form, Icon, Input, Button,message} from 'antd';
import {connect} from 'react-redux'
import {QusLogin} from '../../api'

class Login extends Component {
    passwordValidator = (rule, value, callback)=>{
		if(!value){
			callback('密码必须输入')
		}else if(value.length > 12){
			callback('密码必须小于等于12位')
		}else if(value.length < 4){
			callback('密码必须大于等于4位')
		}else if(!(/^\w+$/).test(value)){
			callback('密码必须是英文、数字或下划线组成')
		}else{
			callback()
		}
	}
    handleSubmit = event => {
        event.preventDefault();
        // console.log(this)
        this.props.form.validateFields(async(err, values) => {
        if (!err) {
            // let {username,password} = values
            // console.log(values)
            let LoginRes = await QusLogin(values)
            let {status,data,msg} = LoginRes
            // console.log(LoginRes)
            if(status === 0){
                message.success('登录成功')
                this.props.history.push('/admin')
                console.log(LoginRes)
                this.props.saveUserAction(data)
                console.log(this.props)
            }else{
                message.warning(msg)
            }

            // MyAxios.post("http://localhost:3000/login",`username=${username}&password=${password}`)
            // .then(
            //     (response)=>{console.log("成功了",response)},
            //     (error)=>{console.log("失败了",error)},
            // )
        }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div id="login">
                <div className="header">
                    <img src={logo} alt="logo"/>
                    <h2>尚硅谷商品管理</h2>
                </div>
                <div className="content">
                    {/* 
								用户名/密码的的合法性要求
									1). 必须输入
									2). 必须大于等于4位
									3). 必须小于等于12位
									4). 必须是英文、数字或下划线组成
					*/}
                    <h3>用户登录</h3>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                { required: true, message: '用户名不能为空!' },
                                {max:12,message:'密码必须小于等于12位'},
                                {min:4,message:'密码必须大于等于4位'},
                                {pattern:/^\w+$/,message:'用户名必须是英文、数字或下划线组成'},
                            ],

                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                            />,
                        )}
                        </Form.Item>
                        <Form.Item>
                        {
								getFieldDecorator('password',{
									rules:[
										{validator:this.passwordValidator}
									]
								})(
									<Input
										prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
										type="password"
										placeholder="密码"
									/>
								)
							}
                        </Form.Item>
                        <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div> 
        )           
}}  
export default  connect(
    (state)=>({userInfo:state.userInfo}),
    {saveUserAction}
)(Form.create()(Login));

