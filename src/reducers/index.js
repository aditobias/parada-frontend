import {combineReducers} from "redux";
import loginReducer from "./login";
import userProfileReducer from "./userProfile";
import parkingLotReducer from "./parkingLot";
import parkingSpacesReducer from "./parkingspaces";
import receiptReducer from "./receipt";

const rootReducer = combineReducers({
  logInResource: loginReducer,
  userProfileResource: userProfileReducer,
  parkingLotReducer : parkingLotReducer,
  parkingSpaceResource: parkingSpacesReducer,
  receiptResource: receiptReducer

});

export default rootReducer;
