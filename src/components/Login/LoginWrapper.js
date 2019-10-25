import React, {Component} from 'react';
import Login from './Login';

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