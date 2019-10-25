import { connect } from 'react-redux';
import LoginWrapper from '../components/Login/LoginWrapper';
import LoginResource from '../api/LoginResource';

const mapStateToProps = state => ({
    loginUser: state.loginResource.userName,
    userPwd: state.loginResource.passWord
});

const mapDispatchToProps = dispatch => ({
    getUserCredentials: credentials => dispatch({
        type: 'LOG_IN',
        payload: credentials
    })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginWrapper);