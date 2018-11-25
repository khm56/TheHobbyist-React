import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";

import profileReducer from "./profileReducer";


import itemsReducer from "./itemsReducer";
import itemReducer from "./itemReducer";
import cartReducer from "./cartReducer";


export default combineReducers({
  auth: authReducer,
  items: itemsReducer,
  prof: profileReducer,
  item: itemReducer,
  cart: cartReducer,
});
