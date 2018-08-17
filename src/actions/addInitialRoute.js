export const ADD_INITIAL_ROUTE ='add-initial-route';

export default function addInitialRoute(route){
    return{
        type:ADD_INITIAL_ROUTE,
        route
    }
}