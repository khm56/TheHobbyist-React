import * as actionTypes from "../actions/actionTypes";

const initialState = {
  cart: {},
  cartItems: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload)
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item !== action.payload)
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        cartItems: []
      };
    case actionTypes.SET_CART:
      return {
        ...state,
        cart: action.payload,
        cartItems: action.payload.orderItems
      };
    default:
      return state;
  }
}
