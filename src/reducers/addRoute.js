import {ADD_INITIAL_ROUTE} from '../actions/addInitialRoute';

export default function addRoute(state={},action){
    switch (action.type) {
        case ADD_INITIAL_ROUTE:
          return {
            ...state,
            initialRoute:action.route
          };
        default:
          return state;
      }
}