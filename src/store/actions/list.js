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

export const addList = (title, description, heroes) => ({
  type: actionTypes.ADD_LIST,
  title,
  description,
  heroes
});

export const removeList = (listIndex) => ({
  type: actionTypes.REMOVE_LIST,
  listIndex
});
