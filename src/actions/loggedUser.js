export const SAVE_LOGGEDUSER='save-loggeduser';

export default function saveLoggedUser(id){
    return{
        type:SAVE_LOGGEDUSER,
        id
    }
}