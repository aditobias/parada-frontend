import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: "",
            passWord: ""
        }
    }

    handleUserNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ passWord: event.target.value });
    }

    render() {
        return (
            <div>
                <div>
                    <span>Username: </span><input type="text" value={this.state.userName} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <span>Password: </span><input type="text" value={this.state.passWord} onChange={this.handlePasswordChange}></input>
                </div>
                <button>LOGIN</button>
                <button>SIGNUP</button>
            </div>

        );
    }
}

export default Login;
