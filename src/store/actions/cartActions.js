// Types
import * as actionTypes from "./actionTypes";
import axios from "axios";
import { fetchProfile } from "./authActions";

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

export const createOrder = () => {
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

export const createOrderItem = () => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/api/orderitem/create/", {
        order: 14,
        item: 4,
        quantity: 2
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
    dispatch(createOrder());
  }
};

export const setStatus = (order_id, status, history, address_id) => {
  return dispatch => {
    console.log("TEST");
    axios
      .put(`http://127.0.0.1:8000/api/order/${order_id}/status-update/`, {
        status: status,
        address: address_id
      })
      .then(() => {
        dispatch(createOrder());
      })
      .then(() => history.push("/profile"))
      .catch(err => {
        console.log(err.response);
      });
  };
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
