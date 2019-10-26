import {combineReducers} from "redux";
import loginReducer from "./login";
import userProfileReducer from "./userProfile";
import parkingLotReducer from "./parkingLot";

const rootReducer = combineReducers({
  logInResource: loginReducer,
  userProfileResource: userProfileReducer,
  parkingLotReducer : parkingLotReducer
});

export default rootReducer;
