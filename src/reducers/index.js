import {combineReducers} from "redux";
import loginReducer from "../reducers/login";


const rootReducer = combineReducers({
  isLogin: loginReducer
});

export default rootReducer;
