import {connect} from 'react-redux';
import LoginWrapper from '../components/Login/LoginWrapper';
import LoginResource from '../api/LoginResource';
import {message} from 'antd';

const mapStateToProps = state => ({
    loginUser: state.username,
    userPassword: state.password,
    passedLogin: state.logInResource.isLogin
});


const mapDispatchToProps = dispatch => ({
    getUserCredentials: credentials => {
        LoginResource.getCredentials(credentials)
            .then(res => {
                res.json();
                if (res.status == "200") {
                    message.success('You are now logged in', 1)
                    dispatch({
                        type: 'LOG_IN',
                        payload: credentials
                    })
                } else if (res.status == "400") {
                    message.error("You have entered an invalid username/password.");
                }
            })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginWrapper);