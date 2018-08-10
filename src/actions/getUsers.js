export const GET_USERS='get-users';

export default function getUsers(users){
    
    return {
        type:GET_USERS,
        users
    }
}