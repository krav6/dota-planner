import * as actionTypes from "./actionTypes";

export const addAttributeFilter = (attribute) => ({
    type: actionTypes.ADD_ATTRIBUTE_FILTER,
    attribute
});

export const removeAttributeFilter = (attribute) => ({
    type: actionTypes.REMOVE_ATTRIBUTE_FILTER,
    attribute
});

export const isAttributeFilterActive = (attribute) => ({
    type: actionTypes.IS_ATTRIBUTE_FILTER_ACTIVE,
    attribute
})