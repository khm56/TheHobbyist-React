// Types
import * as actionTypes from "./actionTypes";

// Add item to Cart
export const addItemToCart = item => dispatch => {
  //   const index = cart.findIndex(
  //     cartItem => cartItem.name == item.name && cartItem.option == item.option
  //   );
  //   if (index >= 0) {
  //     cart[index].quantity++;
  //   } else {
  //   cart.push(item);
  //   }
  dispatch({
    type: actionTypes.ADD_ITEM,
    payload: item
  });
};

// Remove item from cart
export const removeItemFromCart = item => dispatch => {
  dispatch({
    type: actionTypes.REMOVE_ITEM,
    payload: item
  });
};

// Checkout
export const checkoutCart = () => dispatch => {
  dispatch({
    type: actionTypes.CHECKOUT
  });
};
