import {combineReducers} from "redux";
import loginReducer from "./login";

const rootReducer = combineReducers({
  logInResource: loginReducer
});

export default rootReducer;
