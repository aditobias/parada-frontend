const initialState = {
    isLogin : false
}   


export default (state = initialState, {type, payload}) => {
    switch (type) {
      case 'LOG_IN':
        return {
            ...state,
            isLogin: true
        };
      default:
        return state;
    }
  };
  