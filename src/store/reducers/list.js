import * as actionTypes from "../actions/actionTypes";

const initialState = {
  lists: [
    {
      title: "Asd",
      description:
        "sddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      heroes: ["abaddon", "chen", "doom_bringer", "lich"]
    },
    {
      title: "sssss",
      description: "ddddddddd",
      heroes: [
        "skeleton_king",
        "viper",
        "ursa",
        "luna",
        "lich",
        "sven",
        "tidehunter",
        "bristleback"
      ]
    },
    {
      title: "Asd2",
      description: "sdddd",
      heroes: ["zuus"]
    }
  ]
};

const removeHero = (state, action) => {
  action.ev.stopPropagation();

  return {
    ...state,
    lists: [
      ...state.lists.slice(0, action.listId),
      {
        ...state.lists[action.listId],
        heroes: [
          ...state.lists[action.listId].heroes.slice(0, action.heroId),
          ...state.lists[action.listId].heroes.slice(action.heroId + 1)
        ]
      },
      ...state.lists.slice(action.listId + 1)
    ]
  };
};

const removeList = (state, action) => {
  action.ev.stopPropagation();

  return {
    ...state,
    lists: [
      ...state.lists.slice(0, action.listId),
      ...state.lists.slice(action.listId + 1)
    ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LISTS:
      //TODO: localstorage
      return state;
    case actionTypes.REMOVE_HERO:
      return removeHero(state, action);
    case actionTypes.REMOVE_LIST:
      return removeList(state, action);
    default:
      return state;
  }
};

export default reducer;
