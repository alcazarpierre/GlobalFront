import {
  GET_NEWS,
  GET_EVENTS,
} from "./action-types";

const initialState = {
  allNews: [],
  allEvents: []
};

const reducerNews = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        allNews: action.payload,
      };

    case GET_EVENTS:
      return {
        ...state,
        allEvents: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducerNews;
