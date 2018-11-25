import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchProfile = userID => {
  return dispatch => {
    axios
      .get(`http://127.0.0.1:8000/api/profile/${userID}/`)
      .then(res => res.data)
      .then(profile =>
        dispatch({ type: actionTypes.FETCH_PROFILE, payload: profile })
      )
      .catch(err => {
        //dispatch(console.log(err.response));
      });
  };
};
