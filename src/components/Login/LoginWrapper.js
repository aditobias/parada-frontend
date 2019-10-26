import React, {Component} from 'react';
import Login from './Login';
import { Redirect } from 'react-router-dom'

export default class TodoWrapper extends Component {

    onLogMeIn = (credentials) => {
        this.props.getUserCredentials(credentials);
    }

    render() {
        return (
        <div>
        {this.props.passedLogin ? <Redirect to="/userProfile" /> : null}
        <Login onLogin={this.onLogMeIn}/>
        </div>
            )
}
}