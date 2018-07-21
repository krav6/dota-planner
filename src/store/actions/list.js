import * as actionTypes from "./actionTypes";

export const addHero = (listId, heroNameId) => ({
  type: actionTypes.ADD_HERO,
  listId,
  heroNameId
});

export const removeHero = (listId, heroIndex) => ({
  type: actionTypes.REMOVE_HERO,
  listId,
  heroIndex
});

export const addList = (title, description, heroes) => ({
  type: actionTypes.ADD_LIST,
  title,
  description,
  heroes
});

export const removeList = (listId) => ({
  type: actionTypes.REMOVE_LIST,
  listId
});

export const editList = (listId, title, description) => ({
  type: actionTypes.EDIT_LIST,
  listId,
  title,
  description
});

export const setListIsOpen = (listId, isOpen) => ({
  type: actionTypes.SET_LIST_IS_OPEN,
  listId,
  isOpen
});