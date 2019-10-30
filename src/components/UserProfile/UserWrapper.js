import React, {Component} from 'react';
import UserProfile from './UserProfile';

export default class UserWrapper extends Component {

    render() {
        return (
            <UserProfile userInfo={this.props}/>
        )
    }
}