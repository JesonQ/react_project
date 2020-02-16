import React, { Component } from 'react'
import {Layout} from 'antd'
import Header from './header/header'
import check from '../check/check'
import LeftNav from './sider/leftNav'
import './css/admin.less'

const { Footer , Content ,Sider} = Layout;


@check
class Admin extends Component {
	render() {
		return (
			<Layout className="layout">
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout className="content-right">
                    <Header/>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
		)
	}
}


export default Admin
