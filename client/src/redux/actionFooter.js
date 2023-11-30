import { GET_CONTACT_INFO } from "./action-types";
import axios from "axios";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;


export const getContactInfo= () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${ENDPOINT}/contactInfo`);
      return dispatch({ 
        type: GET_CONTACT_INFO, payload: data });
    } catch (error) {
      alert("Error al cargar la info de contacto", error);
    }
  };
};

export const updateContactInfo = (formData) => {
  return async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/contactInfo`, formData);
      if (response.status === 201) {
        alert("Información actualizada exitosamente");
      } else {
        alert('Hubo un error actualizando la información');
        throw new Error("Error al actualizar la información");
      }
    } catch (error) {
      throw error;
    }
  };
};