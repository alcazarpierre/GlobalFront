import { GET_FAQS } from "./action-types";
import axios from "axios";

const ENDPOINT = import.meta.env.VITE_ENDPOINT;

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

export const createFaq = (formData) => {
  return async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/faqs`, formData);
      if (response.status === 201) {
        alert('Pregunta creada exitosamente');
      } else {
        alert('Hubo un error creando la Pregunta y Respuesta');
        throw new Error("Error al crear la nueva Pregunta y Respuesta");
      }
    } catch (error) {
      throw error;
    }
  };
};

export const deleteFaq = (id) => {
  return async () => {
    try {
      await axios.delete(`${ENDPOINT}/faqs/${id}`);
    } catch (error) {
      throw new Error("Error al borrar Pregunta y Respuesta. Intente mas tarde");
    }
  };
};