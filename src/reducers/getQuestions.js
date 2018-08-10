import {GET_QUESTIONS} from '../actions/getQuestions';

export default function getQuestions(state={},action){
      switch(action.type){
          case GET_QUESTIONS:
          return {
              ...state,
              questions:{...action.ques}
          }
          default:
          return state
      }
}