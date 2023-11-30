import {
  GET_ROLES,
  GET_SHAPERS,
  GET_DELETED_MEMBERS,
  GET_MEMBER_BY_NAME,
  GET_MEMBER_DETAILS,
  CLEAR_MEMBER_DETAILS,
} from "./action-types";
import axios from "axios";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;

export const getShapers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/team`, { params: { suspended: false } });
      // console.log('Data desde la DB: ', data);
      return dispatch({
        type: GET_SHAPERS,
        payload: data,
      });
    } catch (error) {
      alert("Error al recuperar shapers", error);
    }
  };
};

export const getDeletedMembers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/team`, { params: { suspended: true } });
      return dispatch({
        type: GET_DELETED_MEMBERS,
        payload: data,
      });
    } catch (error) {
      alert("Error al recuperar shapers", error);
    }
  };
};

export const getMemberByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/team`, { params: { name } });
      return dispatch({
        type: GET_MEMBER_BY_NAME,
        payload: data,
      });
    } catch (error) {
      alert("Error al recuperar shapers", error);
    }
  };
};

export const getMemberDetails = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/team/${id}`);
      return dispatch({
        type: GET_MEMBER_DETAILS,
        payload: data,
      });
    } catch (error) {
      alert("Error al recuperar datos del miembro", error);
    }
  };
};

export const updateMember = (id, formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${ENDPOINT}/team/${id}`, formData);
      if (response.status != 200) {
        throw new Error("Error al actualizar datos del miembro");
      } else if (response.status === 400) {
        throw new Error("Error al crear nuevo miembro");
      }
    } catch (error) {
      throw error;
    }
  };
};

export const postMember = (formData) => {
  return async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/team`, formData);
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

export const deleteMember = (id) => {
  return async () => {
    try {
      await axios.delete(`${ENDPOINT}/team/${id}`);
    } catch (error) {
      throw new Error("Error al borrar usuario. Intente más tarde");
    }
  };
};

export const postRole = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${ENDPOINT}/rol`, formData);
    } catch (error) {
      alert("Error al recuperar roles", error);
    }
  };
};


export const getRoles = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/rol`);
      return dispatch({
        type: GET_ROLES,
        payload: data,
      });
    } catch (error) {
      alert("Error al recuperar roles", error);
    }
  };
};

export const deleteRole = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${ENDPOINT}/rol/${id}`);
    } catch (error) {
      alert("Error al boorar el rol", error);
    }
  };
};

export const clearDetails = () => {
  return {
      type: CLEAR_MEMBER_DETAILS,
  };   
};