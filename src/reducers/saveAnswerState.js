import {ANSWERED_QUESTION} from "../actions/isAnswered";
export default function saveAnswerState(state={...state,ans:false}, action) {
  console.log(state.ans)
  switch (action.type) {
    case ANSWERED_QUESTION:
      return {
        ...state,
        ans:action.ans
      };
    default:
      return state;
  }
}