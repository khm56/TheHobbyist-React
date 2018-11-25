import * as actionTypes from "../actions/actionTypes";

const initialState = {
  item: {}
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ITEM_DETAIL:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
};

export default itemReducer;
