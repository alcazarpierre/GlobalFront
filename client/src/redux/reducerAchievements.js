import { GET_ACHIEVEMENTS } from "./action-types";

const initialState = {
  allAchievements: [],
};

const reducerAchievements = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACHIEVEMENTS:
      return {
        ...state,
        allAchievements: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducerAchievements;
