// Types
import * as actionTypes from "./actionTypes";
import axios from "axios";

// Add item to Cart

export const createAddress = address => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/api/address/create/", address)
      .then(res => res.data)
      .then(address => {
        dispatch({
          type: actionTypes.ADD_ADDRESS,
          payload: address
        });
      })
      .then(() => {
        history.push("/checkout");
      })
      .catch(err => {
        dispatch(console.log(err.response));
      });
  };
};

export const updateAddress = address => {
  return dispatch => {
    axios
      .put(`http://127.0.0.1:8000/api/address/${address_id}/update/`, address)
      .then(res => res.data)
      .then(address => {
        dispatch({
          type: actionTypes.UPDATE_ADDRESS,
          payload: address
        });
      })
      .then(() => {
        history.push("/profile");
      })
      .catch(err => {
        dispatch(console.log(err.response));
      });
  };
};
