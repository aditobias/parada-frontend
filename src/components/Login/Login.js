import React, { Component } from 'react';
import { Form, Icon, Input, Button} from 'antd';
import Parada from './New Logo.png';
import './login.css';
import 'antd/dist/antd.less';
import 'antd/dist/antd.css';
import '../../index.css';
import 'tachyons';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    handleUserNameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    dispatch = () => {
        this.props.onLogin(this.state);
    };

    keyPressed = (event) => {
        if (event.key === "Enter") {
            this.dispatch();
        }
    }


    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div>
                <div>
                    &nbsp;
                </div>
                <div>
                    &nbsp;
                </div>
                <article className="mw6 center shadow-5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10" style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <div align="center">
                        <img src={Parada} alt="logo"/>
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{required: true, message: 'Please input your username!'}],
                                })(
                                    <Input
                                        size="large"
                                        setfieldsvalue={this.state.username}
                                        onChange={this.handleUserNameChange}
                                        prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        placeholder="Username"
                                        onKeyPress={this.keyPressed}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{required: true, message: 'Please input your password!'}],
                                })(
                                    <Input
                                        size="large"
                                        setfieldsvalue={this.state.password}
                                        onChange={this.handlePasswordChange}
                                        prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                        type="password"
                                        placeholder="Password"
                                        onKeyPress={this.keyPressed}
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                                <Button size="large" type="primary" className="login-form-button"
                                        onClick={this.dispatch}>
                                    Log in
                                </Button>
                                or <a href="/signUp">register now!</a>
                            </Form.Item>
                        </Form>
                    </div>
                </article>
            </div>
        );
    }
}


const LoginForm = Form.create({name: 'register'})(Login);

export default LoginForm;
