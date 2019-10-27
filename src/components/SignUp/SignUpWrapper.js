import React, {Component} from 'react';
import SignUp from './SignUp';
import { Redirect } from 'react-router-dom'

export default class TodoWrapper extends Component {

    onLogMeIn = (credentials) => {
        this.props.getUserCredentials(credentials);
    }

    render() {
        return (
        <div>
        {/* {this.props.passedLogin ? <Redirect to="/" /> : null} */}
        <SignUp onLogin={this.onLogMeIn}/>
        </div>
            )
}
}