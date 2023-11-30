import { GET_STORIES } from "./action-types";
import axios from "axios";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;

export const getStories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/stories`);
      dispatch({ type: GET_STORIES, payload: data });
    } catch (error) {
      alert("Error al cargar Historias", error);
    }
  };
};
