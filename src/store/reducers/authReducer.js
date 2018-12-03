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
    case actionTypes.ADD_ADDRESS:
      console.log("adding");
      state.profile.addresses = state.profile.addresses.concat(action.payload);
      return {
        ...state,
        profile: state.profile
      };
    case actionTypes.UPDATE_ADDRESS:
      console.log("update");
      let addresses = state.profile.addresses.filter(
        address => address.id !== action.payload.id
      );
      addresses.concat(action.payload);
      state.profile.addresses = addresses;
      return {
        ...state,
        profile: state.profile
      };
    default:
      return state;
  }
};
