import shortid from "shortid";

import * as actionTypes from "../actions/actionTypes";

const cachedLists = localStorage.getItem("lists");

const initialState = {
  lists: cachedLists === null ? [] : JSON.parse(cachedLists)
};

const updateCache = state => {
  localStorage.setItem("lists", JSON.stringify(state.lists));
  return state;
};

const addHero = (state, action) => {
  const listIndex = state.lists.findIndex(list => list.id === action.listId);

  if (listIndex === -1) {
    return;
  }

  return {
    ...state,
    lists: [
      ...state.lists.slice(0, listIndex),
      {
        ...state.lists[listIndex],
        heroes: [...state.lists[listIndex].heroes, action.heroNameId]
      },
      ...state.lists.slice(listIndex + 1)
    ]
  };
};

const removeHero = (state, action) => {
  const listIndex = state.lists.findIndex(list => list.id === action.listId);

  if (listIndex === -1) {
    return;
  }

  return {
    ...state,
    lists: [
      ...state.lists.slice(0, listIndex),
      {
        ...state.lists[listIndex],
        heroes: [
          ...state.lists[listIndex].heroes.slice(0, action.heroIndex),
          ...state.lists[listIndex].heroes.slice(action.heroIndex + 1)
        ]
      },
      ...state.lists.slice(listIndex + 1)
    ]
  };
};

const addList = (state, action) => {
  return {
    ...state,
    lists: [
      {
        id: shortid.generate(),
        title: action.title,
        description: action.description,
        heroes: [...action.heroes]
      },
      ...state.lists
    ]
  };
};

const removeList = (state, action) => {
  const listIndex = state.lists.findIndex(list => list.id === action.listId);

  if (listIndex === -1) {
    return;
  }

  return {
    ...state,
    lists: [
      ...state.lists.slice(0, listIndex),
      ...state.lists.slice(listIndex + 1)
    ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_HERO:
      return updateCache(addHero(state, action));
    case actionTypes.REMOVE_HERO:
      return updateCache(removeHero(state, action));
    case actionTypes.ADD_LIST:
      return updateCache(addList(state, action));
    case actionTypes.REMOVE_LIST:
      return updateCache(removeList(state, action));
    default:
      return state;
  }
};

export default reducer;
