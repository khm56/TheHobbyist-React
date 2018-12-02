import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};
export const checkForExpiredToken = () => {
  return dispatch => {
    // Get token
    const token = localStorage.token;

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = userData => {
  return dispatch => {
    axios
      .post("http://192.168.100.39/api/login/", userData)
      .then(res => res.data)
      .then(user => {
        const decodedUser = jwt_decode(user.token);
        setAuthToken(user.token);
        dispatch(setCurrentUser(decodedUser));
      })
      .catch(err => console.error(err.response));
  };
};
//127.0.0.1:8000
export const signup = (userData, history) => {
  return dispatch => {
    axios
      .post("http://192.168.100.39/api/register/", userData)
      .then(res => res.data)
      .then(user => {
        const decodedUser = jwt_decode(user.token);
        setAuthToken(user.token);
        dispatch(setCurrentUser(decodedUser));
      })
      .then(() => dispatch(login(userData)))
      .catch(err => console.error(err.response));
  };
};

export const logout = () => {
  setAuthToken();
  return setCurrentUser(null);
};

const setCurrentUser = user => {
  return dispatch => {
    dispatch({ type: actionTypes.SET_CURRENT_USER, payload: user });
    console.log("inside set setCurrentUser");
    if (user) dispatch(fetchProfile());
  };
};

export const fetchProfile = () => {
  console.log("anything");
  return dispatch => {
    axios
      .get(`http://192.168.100.39/api/profile/`)
      .then(res => res.data)
      .then(profile =>
        dispatch({ type: actionTypes.FETCH_PROFILE, payload: profile })
      )
      .then(() => {
        console.log("profileActions");
      })
      .catch(err => {
        //dispatch(console.log(err.response));
      });
  };
};
