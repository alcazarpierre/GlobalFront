import { POST_ADMIN } from "./action-types";

const initialState = {
  user: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ADMIN:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;