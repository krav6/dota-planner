import * as actionTypes from "../actions/actionTypes";

//TODO: Refactor it to a shared handler
const cachedFilters = JSON.parse(localStorage.getItem("filters"));

const initialState = {
  attributes:
    cachedFilters === null
      ? ["strength", "agility", "intelligence"]
      : cachedFilters.attributes,
  name: cachedFilters === null ? "" : cachedFilters.name
};

const updateCache = state => {
  localStorage.setItem("filters", JSON.stringify(state));
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

const updateNameFilter = (state, action) => {
  return {
    ...state,
    name: action.name
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ATTRIBUTE_FILTER:
      return updateCache(addAttributeFilter(state, action));
    case actionTypes.REMOVE_ATTRIBUTE_FILTER:
      return updateCache(removeAttributeFilter(state, action));
    case actionTypes.UPDATE_NAME_FILTER:
      return updateCache(updateNameFilter(state, action));
    default:
      return state;
  }
};

export default reducer;
