import React, {Component} from 'react';
import UserProfile from './UserProfile';
import UserResource from '../../api/UserProfileResource'

export default class UserWrapper extends Component {
    
    componentDidMount() {
       this.props.getMyProfile(this.props.loginUser);
      }

    render() {
        return (
        <UserProfile userInfo={this.props}/>
            )
}
}