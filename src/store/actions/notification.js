import * as actionTypes from "./actionTypes";

export const addErrorNotification = message => ({
  type: actionTypes.ADD_ERROR_NOTIFICATION,
  message
});

export const removeErrorNotification = id => ({
  type: actionTypes.REMOVE_ERROR_NOTIFICATION,
  id
});