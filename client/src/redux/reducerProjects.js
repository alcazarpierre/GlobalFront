import {
  DELETE_PROJECT,
  GET_ALL_PROJECTS,
  DELETE_POST,
  ALL_POSTS,
  GET_COMPLETE_POST,
  GET_ACHIEVEMENTS,
  GET_NEWS,
  GET_EVENTS,
  GET_STORIES,
  FILTRAR,
} from "./action-types";

const initialState = {
  showProjects: [],
  allProjects: [],
  copyProject: [],
  deleteProjects: [],
  allPost: [],
  copyAllPost: [],
  completePost: [],
};

const reducerProjects = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PROJECT:
      return {
        ...state,
        allProjects: [...state.allProjects].filter(
          (project) => project.id !== action.payload
        ),
        deleteProjects: [...state.allProjects].filter(
          (project) => project.id === action.payload
        ),
      };
    case GET_ALL_PROJECTS:
      return {
        allProjects: [...action.payload].filter(
          (post) => post.categories === "Proyectos"
        ),
        copyProject: [...action.payload].filter(
          (post) => post.categories === "Proyectos"
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        allPost: [...state.allPost].filter((post) => post.id != action.payload),
      };
    case ALL_POSTS:
      return {
        ...state,
        allPost: [...action.payload].filter(
          (post) => post.categories != "Proyectos"
        ),
        copyAllPost: [...action.payload].filter(
          (post) => post.categories != "Proyectos"
        ),
      };
    case GET_COMPLETE_POST:
      return {
        ...state,
        completePost: action.payload,
      };
    case GET_ACHIEVEMENTS:
      return {
        ...state,
        allPost: [...state.copyAllPost].filter(
          (post) => post.categories === "Logros"
        ),
      };
    case GET_EVENTS:
      return {
        ...state,
        allPost: [...state.copyAllPost].filter(
          (post) => post.categories === "Eventos"
        ),
      };
    case GET_NEWS:
      return {
        ...state,
        allPost: [...state.copyAllPost].filter(
          (item) => item.categories === "Noticias"
        ),
      };
    case GET_STORIES:
      return {
        ...state,
        allPost: [...state.copyAllPost].filter(
          (post) => post.categories === "Historias"
        ),
      };
    case FILTRAR:
      return {
        ...state,
        allProjects: [...state.copyProject].filter(
          (project) => project.projectCategoryId === action.payload
        ),
      };
    default:
      return { ...state };
  }
};

export default reducerProjects;
