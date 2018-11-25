import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import itemsReducer from "./items";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  prof: profileReducer
});
