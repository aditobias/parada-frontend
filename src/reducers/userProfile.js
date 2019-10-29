const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    verified: false,
    mobileNumber: "",
    profilePicture: "",
    driverType: ""
  };

  export default (state = initialState, { type, payload }) => {
  
    switch (type) {
        case "GET_PROFILE":
            return {
                ...state,
                username: payload.username,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                verified: payload.verified,
                mobileNumber: payload.mobileNumber,
                profilePicture: payload.profilePicture,
                driverType: payload.driverType
            };
        case "GET_PROFILE_TO_EDIT":
            return {
                ...state,
                username: payload.username,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                emailVerificationStatus: payload.emailVerificationStatus,
                mobileNumber: payload.mobileNumber,
                profilePicture: payload.profilePicture,
                driverType: payload.driverType
            };
        default:
            return state
    }
}