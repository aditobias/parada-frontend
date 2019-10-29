const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    emailVerificationStatus: "", 
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
                emailVerificationStatus: payload.emailVerificationStatus,
                mobileNumber: payload.mobileNumber,
                profilePicture: payload.profilePicture,
                driverType: payload.driverType
            };
        default:
            return state
    }
}