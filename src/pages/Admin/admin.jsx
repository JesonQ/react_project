import React, { Component } from 'react'
import {connect} from 'react-redux'

class Admin extends Component {
    render() {
        return (
            <div>
                hello!{console.log(this.props) }
            </div>
        )
    }
}

export default connect(
	state => ({userInfo:state.userInfo}),
	{}
)(Admin)