import * as actionTypes from "../actions/actionTypes";
import shortid from "shortid";

const initialState = {
  errors: []
};

const addErrorNotification = (state, action) => {
  return {
    ...state,
    errors: [
      ...state.errors,
      {
          id: shortid.generate(),
          message: action.message
      }
    ]
  };
};

const removeErrorNotification = (state, action) => {
  const index = state.errors.findIndex(error => error.id === action.id);

  if(index === -1){
      return state;
  }

  return {
    ...state,
    errors: [
      ...state.errors.slice(0, index),
      ...state.errors.slice(index + 1)
    ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ERROR_NOTIFICATION:
      return addErrorNotification(state, action);
    case actionTypes.REMOVE_ERROR_NOTIFICATION:
      return removeErrorNotification(state, action);
    default:
      return state;
  }
};

export default reducer;
