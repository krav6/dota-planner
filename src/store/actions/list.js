import * as actionTypes from "./actionTypes";

export const getLists = () => ({
  type: actionTypes.GET_LISTS
});

export const removeHero = (ev, listId, heroId) => ({
  type: actionTypes.REMOVE_HERO,
  ev,
  listId,
  heroId
});

export const removeList = (ev, listId) => ({
  type: actionTypes.REMOVE_LIST,
  ev,
  listId
});
