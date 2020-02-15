import React, { Component } from 'react'
import {connect} from 'react-redux'


class Admin extends Component {

	

	render() {
		
		return (
			<div style={{fontSize:"25px"}}>
                hello!{console.log(this.props)}
				{/* hello,{this.props.userInfo.user.username} */}
			</div>
		)
	}
}

export default connect(
	state => {
        return {userInfo:state.userInfo}
    },
	{}
)(Admin)
