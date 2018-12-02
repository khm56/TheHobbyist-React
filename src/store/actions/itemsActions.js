import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchItems = () => {
  return dispatch => {
    axios
      .get("http://192.168.100.39/api/item/list/")
      .then(res => res.data)
      .then(items => {
        dispatch({ type: actionTypes.FETCH_ITEMS, payload: items });
      })
      .catch(err => {
        dispatch(console.log(err.response));
      });
  };
};
