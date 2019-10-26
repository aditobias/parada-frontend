import {combineReducers} from "redux";
import loginReducer from "./login";
import userProfileReducer from "./userProfile";
import parkingLotReducer from "./parkingLot";
import parkingSpacesReducer from "./parkingspaces";

const rootReducer = combineReducers({
  logInResource: loginReducer,
  userProfileResource: userProfileReducer,
  parkingLotReducer : parkingLotReducer,
  parkingLotSpacesResource: parkingSpacesReducer

});

export default rootReducer;
