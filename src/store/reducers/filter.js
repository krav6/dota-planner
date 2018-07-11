import * as actionTypes from "../actions/actionTypes";

//TODO: Refactor it to a shared handler
const cachedFilters = JSON.parse(localStorage.getItem("filters"));

const initialState = {
  attributes:
    cachedFilters === null
      ? ["strength", "agility", "intelligence"]
      : cachedFilters.attributes,
  name: cachedFilters === null ? "" : cachedFilters.name,
  attackTypes:
    cachedFilters === null
      ? ["MELEE", "RANGED"]
      : cachedFilters.attackTypes
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
  };
};

const addAttackTypeFilter = (state, action) => {
  return {
    ...state,
    attackTypes: [...state.attackTypes, action.attackType]
  };
};

const removeAttackTypeFilter = (state, action) => {
  const index = state.attackTypes.indexOf(action.attackType);

  return {
    ...state,
    attackTypes: [
      ...state.attackTypes.slice(0, index),
      ...state.attackTypes.slice(index + 1)
    ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ATTRIBUTE_FILTER:
      return updateCache(addAttributeFilter(state, action));
    case actionTypes.REMOVE_ATTRIBUTE_FILTER:
      return updateCache(removeAttributeFilter(state, action));
    case actionTypes.UPDATE_NAME_FILTER:
      return updateCache(updateNameFilter(state, action));
    case actionTypes.ADD_ATTACKTYPE_FILTER:
      return updateCache(addAttackTypeFilter(state, action));
    case actionTypes.REMOVE_ATTACKTYPE_FILTER:
      return updateCache(removeAttackTypeFilter(state, action));
    default:
      return state;
  }
};

export default reducer;
