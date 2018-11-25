// Types
import * as actionTypes from "./actionTypes";
import axios from "axios";

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

export const createOrder = profile_id => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/api/order/create/")
      .then(res => res.data)
      .then(cart => {
        dispatch({
          type: actionTypes.SET_CART,
          payload: { ...cart, orderItems: [] }
        });
      })
      .catch(err => {
        dispatch(console.log(err.response));
      });
  };
};

export const createOrderItem = profile_id => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/api/orderitem/create/", {
        order: 6,
        item: 1,
        quantity: 20
      })
      .then(res => res.data)
      .then(item => {
        dispatch({
          type: actionTypes.ADD_TO_CART,
          payload: item
        });
      })
      .catch(err => {
        dispatch(console.log(err.response));
      });
  };
};

export const setCart = profile => dispatch => {
  let cart = profile.orders.find(order => order.status === "C");
  if (cart) {
    dispatch({
      type: actionTypes.SET_CART,
      payload: cart
    });
  } else {
    dispatch(createOrder(profile.id));
  }
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
