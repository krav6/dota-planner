import * as actionTypes from "./actionTypes";

export const getLists = () => ({
  type: actionTypes.GET_LISTS
});

export const addHero = (listIndex, heroId) => ({
  type: actionTypes.ADD_HERO,
  listIndex,
  heroId
});

export const removeHero = (listIndex, heroIndex) => ({
  type: actionTypes.REMOVE_HERO,
  listIndex,
  heroIndex
});

export const removeList = (listIndex) => ({
  type: actionTypes.REMOVE_LIST,
  listIndex
});
