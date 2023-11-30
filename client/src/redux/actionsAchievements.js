import { GET_ACHIEVEMENTS } from "./action-types";
import axios from "axios";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;

export const getAchievements = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/achievements`);
      dispatch({ type: GET_ACHIEVEMENTS, payload: data });
    } catch (error) {
      alert("Error al cargar logros", error);
    }
  };
};
