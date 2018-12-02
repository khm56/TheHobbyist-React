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
      .catch(err => {
        dispatch(console.log(err.response));
      });
  };
};

export const updateAddress = (
  address_id,
  name,
  governorate,
  area,
  block,
  street,
  house_building,
  floor,
  appartment,
  extra_directions,
  defaultyes,
  history
) => {
  return dispatch => {
    axios
      .put(`http://127.0.0.1:8000/api/address/${address_id}/update/`, {
        name: name,
        governorate: governorate,
        area: area,
        block: block,
        street: street,
        house_building: house_building,
        floor: floor,
        appartment: appartment,
        extra_directions: extra_directions,
        default: defaultyes
      })
      .then(res => res.data)
      .then(address => {
        dispatch({
          type: actionTypes.ADD_ADDRESS,
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
