import * as actionTypes from "../actions/actionTypes";

const initialState = {
  items: []
};
const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case actionTypes.SET_STOCK:
      let item = state.items.find(item => item.id === action.payload.id);
      item.stock = action.payload.stock;
      return {
        ...state
      };
    default:
      return state;
  }
};

export default itemsReducer;
