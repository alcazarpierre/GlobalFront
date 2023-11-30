// import { POST_ADMIN } from "./action-types";
// import axios from 'axios';

// const ENDPOINT = import.meta.env.VITE_ENDPOINT;

// const setUserData = (userData) => {
//   return {
//     type: POST_ADMIN,
//     payload: userData
//   };
// };

// export const postLogin = (userData) => {
//   return async (dispatch) => {            
//     try {
//       const response = await axios.post(`${ENDPOINT}/login`, userData);
//       if (response.status === 200) {
//         // Despachar los datos al estado global
//         dispatch(setUserData(response.data));
//         return response.data;
//       } else if (response.status === 400) {
//         throw new Error("Error de servidor, por favor intente más tarde");
//       } else if (response.status === 403) {
//         throw new Error("Usuario o contraseña incorrectos");
//       }
//     } catch (error) {
//         throw error;
//     }
//   }
// }
