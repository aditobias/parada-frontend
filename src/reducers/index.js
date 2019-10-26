import {combineReducers} from "redux";
import loginReducer from "./login";
import parkingLotReducer from "./parkingLot";

const rootReducer = combineReducers({
  logInResource: loginReducer,
  parkingLotReducer : parkingLotReducer
});

export default rootReducer;
