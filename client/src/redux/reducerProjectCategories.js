import { 
    GET_EDUCATION_POST, 
    GET_GENDER_POST, 
    GET_TEAM_POST, 
    GET_WEATHER_POST, 
    GET_CLUB_POST } from "./action-types"

const initialState = {
    allEducationPost: [],
    allGenderPost:[],
    allWeatherPost:[],
    allClubPost:[],
    allTeamPost:[]    
};


const reducerProjectCategories = (state = initialState, action) => {
    switch (action.type) {
        case GET_EDUCATION_POST:
          return {
            ...state,
            allEducationPost: action.payload,
          };
    
        case GET_GENDER_POST:
          return {
            ...state,
            allGenderPost: action.payload,
          };

        case GET_TEAM_POST:
          return {
            ...state,
            allTeamPost: action.payload,
            };
        
            case GET_WEATHER_POST:
          return {
            ...state,
            allWeatherPost: action.payload,
          };

          case GET_CLUB_POST:
          return {
            ...state,
            allClubPost: action.payload,
          };

        default:
          return { ...state };
      }    

};

export default reducerProjectCategories;