import React, {Component} from 'react';
import SignUp from './SignUp';
import { Redirect } from 'react-router-dom'
import EmailResource from "../../api/EmailResource";

export default class SignUpWrapper extends Component {

    state = {
        username: ''
    };


    onSignUp = (credentials) => {
        this.props.getUserInfo(credentials);
        this.setState({
            username: credentials.username
        })
    };

    render() {
        if(this.props.passedLogin){
            EmailResource.sendEmailVerification(this.state.username);
        }
        return (
            <div>
                {this.props.passedLogin ? <Redirect to="/parkingLots"/> : null}
                <SignUp onSignUp={this.onSignUp}/>
            </div>
            )
}
}