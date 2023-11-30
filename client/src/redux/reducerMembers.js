import { all } from "axios";
import {
  GET_SHAPERS,
  GET_MEMBER_DETAILS,
  GET_DELETED_MEMBERS,
  GET_MEMBER_BY_NAME,
  DELETE_MEMBERS,
  PUT_MEMBER_STATUS,
  GET_ROLES,
  CLEAR_MEMBER_DETAILS,
} from "./action-types";

const initialState = {
  allShapers: [],
  displayMembers: [],
  memberDetails: [],
  deletedMembers: [],
  memberByName: [],
  allRoles: [],
};

const reducerMember = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHAPERS:
      return {
        ...state,
        allShapers: action.payload,
        displayMembers: action.payload,
      };

    case GET_DELETED_MEMBERS:
      return {
        ...state,
        deletedMembers: action.payload,
        displayMembers: action.payload,
      };

    case GET_MEMBER_DETAILS:
      return {
        ...state,
        memberDetails: action.payload,
      };

    case GET_MEMBER_BY_NAME:
      return {
        ...state,
        memberByName: action.payload,
        displayMembers: action.payload,
      };

    case PUT_MEMBER_STATUS:
      return {
        ...state,
        memberDetails: {
          ...state.memberDetails,
          isSuspended: action.payload.isSuspended,
        },
      };

    case DELETE_MEMBERS:
      return {
        ...state,
        deletedMembers: action.payload,
      };

    case GET_ROLES:
      return {
        ...state,
        allRoles: action.payload,
      }
    
      case CLEAR_MEMBER_DETAILS:
        return {
          ...state,
          memberDetails: [],
        }

    default:
      return { ...state };
  }
};

export default reducerMember;
