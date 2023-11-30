import { GET_NEWS, GET_EVENTS } from "./action-types";
import axios from "axios";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;

export const getNewsEvent = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/news`);
      const noticiasData = data.filter(
        (item) => item.categories === "Noticias"
      );
      const eventosData = data.filter((item) => item.categories === "Eventos");

      dispatch({
        type: GET_NEWS,
        payload: noticiasData,
      });

      dispatch({
        type: GET_EVENTS,
        payload: eventosData,
      });
    } catch (error) {
      alert("Error al traer Novedades", error);
    }
  };
};

export const getNews = () => {
  return async (dispatch) => {
    try {
      const news = await axios.get(`${ENDPOINT}/news`);
      dispatch({
        type: GET_NEWS,
        payload: news.data,
      });
    } catch (error) {
      alert("Error al traer novedades", error);
    }
  };
};
