import React, { Component } from 'react'

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
        // this.setState({inputValue: ''})
      };

    render() {
        return (
            <div>
                <div>
                    <span>Username: </span><input type="text" value={this.state.username} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <span>Password: </span><input type="text" value={this.state.password} onChange={this.handlePasswordChange}></input>
                </div>
                <button onClick={this.dispatch}>LOGIN</button>
                <button>SIGNUP</button>
            </div>

        );
    }
}

export default Login;
