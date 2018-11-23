import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import itemsReducer from "./items";

export default combineReducers({
  auth: authReducer,
  items: itemsReducer
});
