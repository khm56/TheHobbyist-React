// Types
import * as actionTypes from "./actionTypes";
import axios from "axios";

// Add item to Cart

export const createAddress = address => {
  return dispatch => {
    axios
      .post("http://127.0.0.1:8000/api/address/create/", address)
      .then(res => res.data)
      .then(item => {
        dispatch({
          type: actionTypes.ADD_ADDRESS,
          payload: address
        });
      })
      .catch(err => {
        dispatch(console.log(err.response));
      });
  };
};
