import {
  DELETE_POST,
  DELETE_PROJECT,
  GET_ALL_PROJECTS,
  FILTRAR,
} from "./action-types";
import axios from "axios";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;

export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${ENDPOINT}/post/${id}`);
      return dispatch({
        type: DELETE_PROJECT,
        payload: id,
      });
    } catch (error) {
      alert("Error al eliminar proyecto", error);
    }
  };
};

export const getAllProjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/project`);
      return dispatch({
        type: GET_ALL_PROJECTS,
        payload: data,
      });
    } catch (error) {
      alert(error);
    }
  };
};

export const postProject = (proyecto) => {
  return async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/post`, proyecto);
      return response.data;
    } catch (error) {
      alert(error);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${ENDPOINT}/post/${id}`);
      return dispatch({
        type: DELETE_POST,
        payload: id,
      });
    } catch (error) {
      alert("Error al eliminar proyecto", error);
    }
  };
};

export const filtered = (id) => {
  return (dispatch) => {
    console.log("antes de llegar al dispatch");
    dispatch({
      type: FILTRAR,
      payload: id,
    });
  };
};
