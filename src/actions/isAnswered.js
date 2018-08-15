export const ANSWERED_QUESTION='ans-question';

export default function isAnswered(ans){
    
    return{
        type:ANSWERED_QUESTION,
        ans
    }
}