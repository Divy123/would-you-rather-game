import {GET_USERS} from '../actions/getUsers';

export default function getUsers(state={},action){
      switch(action.type){
          case GET_USERS:
          return {
              ...state,
              users:{...action.users}
          }
          default:
          return state
      }
}