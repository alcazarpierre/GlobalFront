import { GET_CONTACT_INFO } from "./action-types";



const initialState = {
      allContactInfo: []
};
  
  const reducerFooter = (state = initialState, action) => {
    switch (action.type) {
      case GET_CONTACT_INFO:
        return {
          ...state,
          allContactInfo: action.payload,
        };
      default:
        return { ...state };
    }
  };
  
  export default reducerFooter;