import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import itemsReducer from "./itemsReducer";
import itemReducer from "./itemReducer";

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  item: itemReducer
});
