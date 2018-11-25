import * as actionTypes from "./actionTypes";

import axios from "axios";

export const fetchItemDetail = itemID => {
  return dispatch => {
    axios
      .get(`http://127.0.0.1:8000/api/item/${itemID}/detail/`)
      .then(res => res.data)
      .then(item =>
        dispatch({
          type: actionTypes.FETCH_ITEM_DETAIL,
          payload: item
        })
      );
  };
};
