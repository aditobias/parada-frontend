import React, {Component} from 'react';
import Login from './Login';
import LoginResource from '../../api/LoginResource'

export default class TodoWrapper extends Component {

    onLogMeIn = credentials =>{
        this.props.getUserCredentials(credentials);
    }

    render() {
        return (
        <Login onLogin={this.onLogMeIn}/>
            )
}
}