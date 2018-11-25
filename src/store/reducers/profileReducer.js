import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};
