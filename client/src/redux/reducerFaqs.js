import {
  GET_FAQS,
} from "./action-types";

const initialState = {
  allFaqs: []
};

const reducerFaqs = (state = initialState, action) => {
  switch (action.type) {
    case GET_FAQS:
      return {
        ...state,
        allFaqs: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducerFaqs;
