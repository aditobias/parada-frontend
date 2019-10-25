const initialState = {
    isLogin : false
}   


export default (state = initialState, {action, payload}) => {
    switch (action) {
      case 'LOG_IN':
        return {
            ...state,
            isLogin: !!state.isLogin
        };
      default:
        return state;
    }
  };
  