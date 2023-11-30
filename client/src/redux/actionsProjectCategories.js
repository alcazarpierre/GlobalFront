import { 
    GET_EDUCATION_POST, 
    GET_GENDER_POST, 
    GET_TEAM_POST, 
    GET_WEATHER_POST, 
    GET_CLUB_POST 
  } from "./action-types";
  
  import axios from "axios";
  
  const ENDPOINT = import.meta.env.VITE_ENDPOINT;
  
  export const getPostByProjectCategory = (id) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.get(`${ENDPOINT}/projectcategory/${id}`);
  
        switch (id) {
          case 1:
            dispatch({
              type: GET_EDUCATION_POST,
              payload: data
            });
            break;
          case 2:
            dispatch({
              type: GET_GENDER_POST,
              payload: data
            });
            break;
          case 3:
            dispatch({
              type: GET_WEATHER_POST,
              payload: data
            });
            break;
          case 4:
            dispatch({
              type: GET_CLUB_POST,
              payload: data
            });
            break;
          case 5:
            dispatch({
              type: GET_TEAM_POST,
              payload: data
            });
            break;
          default:
            console.error(`ID no válido: ${id}`);
            break;
        }
      } catch (error) {
        alert("Error al traer las publicaciones", error);
      }
    };
  };