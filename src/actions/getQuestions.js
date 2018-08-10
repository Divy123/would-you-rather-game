export const GET_QUESTIONS='get-questions';

export default function getQuestions(ques){
    
    return{
        type:GET_QUESTIONS,
        ques
    }
}