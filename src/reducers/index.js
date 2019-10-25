import {combineReducers} from "redux";
import login from "./login";


const rootReducer = combineReducers({
  isLogin: login,
});

export default rootReducer;
