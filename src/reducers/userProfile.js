const initialState = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    emailVerificationStatus: "", 
    mobileNumber: "",
    profilePicture: ""
  };

  export default (state = initialState, { type, payload }) => {
  
    switch (type) {
        case "GET_PROFILE":
            return{
                ...state,
                username: payload.username,
                firstName: payload.firstName,
                lastName: payload.lastName,
                email: payload.email,
                emailVerificationStatus: payload.emailVerificationStatus,
                mobileNumber: payload.mobileNumber,
                profilePicture: payload.profilePicture
            }
        default:
            return state
    }
}