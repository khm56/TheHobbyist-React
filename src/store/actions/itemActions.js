import * as actionTypes from "./actionTypes";

import axios from "axios";

export const fetchItemDetail = itemID => {
  return dispatch => {
    axios
      .get(`http://192.168.100.39/api/item/${itemID}/detail/`)
      .then(res => res.data)
      .then(item =>
        dispatch({
          type: actionTypes.FETCH_ITEM_DETAIL,
          payload: item
        })
      );
  };
};
