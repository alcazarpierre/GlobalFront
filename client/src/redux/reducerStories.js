import {
  GET_STORIES
} from "./action-types";

const initialState = {
  allStories: []
};

const reducerStories = (state = initialState, action) => {
  switch (action.type) {
    case GET_STORIES:
      return {
        ...state,
        allStories: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducerStories;
