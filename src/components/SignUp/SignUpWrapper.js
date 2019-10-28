import React, {Component} from 'react';
import SignUp from './SignUp';
import { Redirect } from 'react-router-dom'

export default class SignUpWrapper extends Component {

    onSignUp = (credentials) => {
        this.props.getUserInfo(credentials);
    }

    render() {
        return (
        <div>
        {this.props.passedLogin ? <Redirect to="/parkingLots" /> : null}
        <SignUp onSignUp={this.onSignUp}/>
        </div>
            )
}
}