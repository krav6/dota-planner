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
      title: "sssssssssssssssssssssssssssssssssssssssssssssssss",
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

const addHero = (state, action) => {
  return {
    ...state,
    lists: [
      ...state.lists.slice(0, action.listIndex),
      {
        ...state.lists[action.listIndex],
        heroes: [...state.lists[action.listIndex].heroes, action.heroId]
      },
      ...state.lists.slice(action.listIndex + 1)
    ]
  };
};

const removeHero = (state, action) => {
  return {
    ...state,
    lists: [
      ...state.lists.slice(0, action.listIndex),
      {
        ...state.lists[action.listIndex],
        heroes: [
          ...state.lists[action.listIndex].heroes.slice(0, action.heroIndex),
          ...state.lists[action.listIndex].heroes.slice(action.heroIndex + 1)
        ]
      },
      ...state.lists.slice(action.listIndex + 1)
    ]
  };
};

const removeList = (state, action) => {
  return {
    ...state,
    lists: [
      ...state.lists.slice(0, action.listIndex),
      ...state.lists.slice(action.listIndex + 1)
    ]
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LISTS:
      //TODO: localstorage
      return state;
    case actionTypes.ADD_HERO:
      return addHero(state, action);
    case actionTypes.REMOVE_HERO:
      return removeHero(state, action);
    case actionTypes.REMOVE_LIST:
      return removeList(state, action);
    default:
      return state;
  }
};

export default reducer;
