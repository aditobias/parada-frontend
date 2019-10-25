import {combineReducers} from "redux";
import loginReducer from "./login";
import userProfileReducer from "./userProfile";

const rootReducer = combineReducers({
  logInResource: loginReducer,
  userProfileResource: userProfileReducer
});

export default rootReducer;
