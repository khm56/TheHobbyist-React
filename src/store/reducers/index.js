import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import itemsReducer from "./items";
import cartReducer from "./cartReducer";

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  cart: cartReducer
});
