import { connect } from 'react-redux';
import LoginWrapper from '../components/Login/LoginWrapper';
import LoginResource from '../api/LoginResource';

const mapStateToProps = state => ({
    loginUser: state.userName,
    userPassword: state.passWord
});

const mapDispatchToProps = dispatch => ({
    getUserCredentials: credentials => {
        LoginResource.getCredentials(credentials)
            .then(res => res.json())
            .then((credentials) => {
                dispatch({
                    type: 'LOG_IN',
                    payload: credentials
                })
            });
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginWrapper);