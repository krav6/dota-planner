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
      heroes: ["skeleton_king", "viper", "ursa", "luna", "lich", "sven", "tidehunter", "bristleback"]
    },
    {
      title: "Asd2",
      description: "sdddd",
      heroes: ["zuus"]
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LISTS:
      return state.lists;
    default:
      return state;
  }
};

export default reducer;
