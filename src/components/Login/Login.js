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
        const { getFieldDecorator } = this.props.form;
        return (
            <article class="mw6 center shadow-5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div align="center">
                <img src={Parada} alt="logo" />
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    value={this.state.username} 
                                    onChange={this.handleUserNameChange}
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your password!' }],
                            })(
                                <Input
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" className="login-form-button" onClick = {this.dispatch}>
                                Log in
                            </Button>
                            or <a href="/signUp">register now!</a>
                        </Form.Item>
                    </Form>
                </div>
            </article>
        );
    }
}


const LoginForm = Form.create({ name: 'register' })(Login);

export default LoginForm;
