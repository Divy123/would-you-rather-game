import { _getUsers, _getQuestions,_saveQuestion } from "../_DATA";
import getUsers from "./getUsers";
import getQuestions from './getQuestions'

export default function getUsersData() {
  return dispatch => {
    _getUsers().then(users => {
      dispatch(getUsers(users));
    });
  };
}

export  function getQuestionsData(){
  return dispatch => {
    console.log(dispatch,'dispatch')
    _getQuestions().then( questions=> {console.log(questions,'vvvvvv')
      dispatch(getQuestions(questions));
    });
  }; 
}

export function addQuestion(question,dispatch){
  _saveQuestion(question).then(()=>{
    dispatch(getQuestionsData());
    
  })
  

}