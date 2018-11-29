import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";

import itemsReducer from "./itemsReducer";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";
import addressReducer from "./addressReducer";

export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  prof: authReducer,
  item: itemReducer,
  cart: cartReducer,
  address: addressReducer
});
