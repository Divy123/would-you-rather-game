import {SAVE_LOGGEDUSER} from "../actions/loggedUser";
export default function saveLoggedUser(state = {}, action) {
  switch (action.type) {
    case SAVE_LOGGEDUSER:
      return {
        ...state,
        loggedUserId: action.id
      };
    default:
      return state;
  }
}
