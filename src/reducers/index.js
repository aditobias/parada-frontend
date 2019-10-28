import {combineReducers} from "redux";
import loginReducer from "./login";
import userProfileReducer from "./userProfile";
import parkingLotReducer from "./parkingLot";
import parkingSpacesReducer from "./parkingspaces";
import receiptReducer from "./receipt";
import userTransaction from "./userTransactionHistory";

const rootReducer = combineReducers({
  logInResource: loginReducer,
  userProfileResource: userProfileReducer,
  parkingLotReducer : parkingLotReducer,
  parkingSpaceResource: parkingSpacesReducer,
  receiptResource: receiptReducer
  // userTransaction: userTransaction
});

export default rootReducer;
