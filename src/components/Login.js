import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div>
                    <span>Username: </span><input type="text"></input>
                </div>
                <div>
                    <span>Password: </span><input type="text"></input>
                </div>
                <button>LOGIN</button>
                <button>SIGNUP</button>
            </div>

        );
    }
}

export default Login;
