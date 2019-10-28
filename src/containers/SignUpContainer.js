import { connect } from 'react-redux';
import {message } from 'antd';
import SignUpWrapper from '../components/SignUp/SignUpWrapper';
import SignUpResource from '../api/SignUpResource';

const mapStateToProps = state => ({
    loginUser: state.username,
    userPassword: state.password,
    passedLogin: state.logInResource.isLogin
});


const mapDispatchToProps = dispatch => ({
    getUserInfo: credentials => {
        SignUpResource.createUser(credentials)
            .then(res => {
                res.json();
                console.log(res);
                if(res.status == "201")
                {
                    message.success('Your account was successfully created')
                    dispatch({
                        type: 'LOG_IN',
                        payload: credentials
                    })  
                }
                else if(res.status == "500")
                {
                    message.error("Username is already taken");
                }
            })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpWrapper);
