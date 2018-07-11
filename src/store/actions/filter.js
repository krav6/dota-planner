import * as actionTypes from "./actionTypes";

export const addAttributeFilter = (attribute) => ({
    type: actionTypes.ADD_ATTRIBUTE_FILTER,
    attribute
});

export const removeAttributeFilter = (attribute) => ({
    type: actionTypes.REMOVE_ATTRIBUTE_FILTER,
    attribute
});

export const updateNameFilter = (name) => ({
    type: actionTypes.UPDATE_NAME_FILTER,
    name
});

export const addAttackTypeFilter = (attackType) => ({
    type: actionTypes.ADD_ATTACKTYPE_FILTER,
    attackType
});

export const removeAttackTypeFilter = (attackType) => ({
    type: actionTypes.REMOVE_ATTACKTYPE_FILTER,
    attackType
});