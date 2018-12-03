import * as actionTypes from "../actions/actionTypes";

const initialState = {
  address: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ADDRESS:
      return {
        ...state,
        address: action.payload
      };
    case actionTypes.UPDATE_ADDRESS:
      return {
        ...state,
        address: action.payload
      };

    default:
      return state;
  }
};
