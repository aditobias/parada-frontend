const initialState = {
    isLogin : false,
    userName : ""
}   


export default (state = initialState, {type, payload}) => {
    switch (type) {
      case 'LOG_IN':
        return {
            ...state,
            isLogin: true,
            userName: payload.username
        };
      default:
        return state;
    }
  };
  