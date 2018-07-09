import * as actionTypes from "../actions/actionTypes";

//TODO: Refactor it to a shared handler
const cachedAttributes = localStorage.getItem("attributes");

const initialState = {
  attributes: cachedAttributes === null ? ["strength", "agility", "intelligence"] : JSON.parse(cachedAttributes)
};

const updateCache = state => {
  localStorage.setItem("attributes", JSON.stringify(state.attributes));
  return state;
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
      return updateCache(addAttributeFilter(state, action));
    case actionTypes.REMOVE_ATTRIBUTE_FILTER:
      return updateCache(removeAttributeFilter(state, action));
    default:
      return state;
  }
};

export default reducer;
