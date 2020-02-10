import React, { Component } from 'react'
import './css/login.less'
import logo from './imgs/logo.png'
import { Form, Icon, Input, Button, Checkbox } from 'antd';

class Login extends Component {
    handleSubmit = event => {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
        if (!err) {
            console.log('Received values of form: ', values);
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
                                {max:12,message:'用户名必须大于等于4位'},
                                {min:4,message:'用户名必须小于等于12位'},
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
                        {getFieldDecorator('password', {
                            rules: [
                                { required: true, message: '密码不能为空!' },
                                {max:12,message:'密码必须大于等于4位'},
                                {min:4,message:'密码必须小于等于12位'},
                                {pattern:/^\w+$/,message:'用户名必须是英文、数字或下划线组成'},
                            ],
                        })(
                            <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />,
                        )}
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
export default  Form.create()(Login);

