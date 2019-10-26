import { connect } from 'react-redux';
import LoginWrapper from '../components/Login/LoginWrapper';
import LoginResource from '../api/LoginResource';

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
                console.log(res);
                if(res.status == "200")
                {
                    dispatch({
                        type: 'LOG_IN',
                        payload: credentials
                    })  
                }
                else if(res.status == "500")
                {
                    alert("You have entered an invalid username/ password.");
                }
            })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginWrapper);