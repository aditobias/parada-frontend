import React, { Component } from 'react'


class UserProfile extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <span>First Name: {this.props.userInfo.loginUser}</span>
                </div>
                    <span>Last Name: {this.props.userInfo.firstName}</span>
                <div>
                    <span>Mobile Number: {this.props.userInfo.mobileNumber}</span>
                </div>
                    <span>E-mail Address: {this.props.userInfo.email}</span>
                <div>
                    <span>E-mail Verification Status: {this.props.userInfo.emailVerificationStatus}</span>
                </div>
                <div>
                    <span>Profile Picture: {this.props.userInfo.profilePicture}</span>
                </div>
            </div>
        )
    }
}

export default UserProfile;
