import { connect } from 'react-redux';
import UserWrapper from '../components/UserProfile/UserWrapper';
import UserResource from '../api/UserProfileResource';

const mapStateToProps = state => ({
    loginUser: state.logInResource.userName,
    firstName: state.userProfileResource.firstName,
    lastName: state.userProfileResource.lastName,
    email:  state.userProfileResource.email,
    mobileNumber: state.userProfileResource.mobileNumber,
    emailVerificationStatus: state.userProfileResource.emailVerificationStatus,
    profilePicture: state.userProfileResource.profilePicture,
    driverType: state.userProfileResource.driverType
});

// const mapDispatchToProps = dispatch => ({
//     getMyProfile: (userName) => {
//         UserResource.getUserProfile(userName)
//             .then(res => res.json())
//             .then(({ username, firstName, lastName, email, mobileNumber, emailVerificationStatus, profilePicture, driverType}) => {
//                 console.log({
//                     username,
//                     firstName,
//                     lastName,
//                     email,
//                     mobileNumber,
//                     emailVerificationStatus,
//                     profilePicture,
//                     driverType
//                 });
//
//                 dispatch({
//                     type: 'GET_PROFILE',
//                     payload: { username, firstName, lastName, email, mobileNumber, emailVerificationStatus, profilePicture, driverType }
//                 })
//             })
//     }
// })

export default connect(
    mapStateToProps
    // ,mapDispatchToProps
)(UserWrapper);