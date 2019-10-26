import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Parada from './logo.png';
import './login.css';
import { Button, Card } from 'antd';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUserNameChange = (event) => {
        this.setState({ username: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    dispatch = () => {
        this.props.onLogin(this.state);
        this.setState({ username: '', password: '' });
    };

    render() {
        return (
            <div className="center">
                <img src={Parada} alt="logo" />


                <Card bordered={false}>
                    <div className="center">
                        <AccountCircleIcon style={{ height: "50px", width: "50px", padding: "6px" }} className="icon" />
                        <TextField variant="outlined" label="Username" value={this.state.username} onChange={this.handleUserNameChange} />
                    </div>
                    <div>
                        <LockRoundedIcon style={{ height: "50px", width: "50px", padding: "6px" }} className="icon" />
                        <TextField variant="outlined" label="Password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <div className="center">
                        <Button type="primary" size="large" onClick={this.dispatch}>LOGIN</Button>{" "}
                        <Button type="primary" size="large">SIGNUP</Button>
                    </div>
                </Card>
            </div>
        );
    }
}

export default Login;
