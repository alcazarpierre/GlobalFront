import {
  GET_NEWS,
  GET_EVENTS,
  GET_ACHIEVEMENTS,
  GET_STORIES,
  GET_FAQS,
  ALL_POSTS,
  GET_CONTACT_INFO,
  GET_COMPLETE_POST,
} from "./action-types";

import axios, { formToJSON } from "axios";

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
      throw error;
    }
  };
};

export const getAchievements = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/achievements`);
      dispatch({ type: GET_ACHIEVEMENTS, payload: data });
    } catch (error) {
      throw error;
    }
  };
};

export const getStories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/stories`);
      dispatch({ type: GET_STORIES, payload: data });
    } catch (error) {
      throw error;
    }
  };
};

export const getFaqs = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/faqs`);
      dispatch({ type: GET_FAQS, payload: data });
    } catch (error) {
      alert("Error al cargar Faqs", error);
    }
  };
};

export const getContactInfo = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/contactInfo`);
      dispatch({ type: GET_CONTACT_INFO, payload: data });
    } catch (error) {
      alert("Error al cargar la información de contacto", error);
    }
  };
};

export const createPost = (formData) => {
  return async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/post`, formData);
      if (response.status != 201) {
        throw new Error("Error al crear nuevo miembro");
      } else if (response.status === 400) {
        throw new Error("Error al crear nuevo miembro");
      }
    } catch (error) {
      throw error;
    }
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const posts = await axios.get(`${ENDPOINT}/post`);
      dispatch({
        type: ALL_POSTS,
        payload: posts.data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const putPost = (id, state) => {
  return async () => {
    try {
      const response = await axios.put(`${ENDPOINT}/post/${id}`, state);
      return response.data;
    } catch (error) {
      alert(error);
    }
  };
};
export const getCompletePost = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/post`);
      dispatch({
        type: GET_COMPLETE_POST,
        payload: data,
      });
    } catch (error) {
      alert("Error al traer todas las Publicaciones", error);
    }
  };
};
