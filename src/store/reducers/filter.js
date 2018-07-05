import * as actionTypes from "../actions/actionTypes";

const initialState = {
  attributes: ["strength", "agility", "intelligence"]
};

const addAttributeFilter = (state, action) => {
  return {
    ...state,
    attributes: [...state.attributes, action.attribute]
  };
};

const removeAttributeFilter = (state, action) => {
  const index = state.attributes.indexOf(action.attribute);

  return {
    ...state,
    attributes: [
      ...state.attributes.slice(0, index),
      ...state.attributes.slice(index + 1)
    ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ATTRIBUTE_FILTER:
      return addAttributeFilter(state, action);
    case actionTypes.REMOVE_ATTRIBUTE_FILTER:
      return removeAttributeFilter(state, action);
    default:
      return state;
  }
};

export default reducer;
