import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  profile: null,
  checked: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        checked: true
      };
    case actionTypes.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};
