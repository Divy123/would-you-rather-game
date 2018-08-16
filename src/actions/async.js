import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from "../_DATA";
import getUsers from "./getUsers";
import getQuestions from "./getQuestions";
import isAnswered from "../actions/isAnswered";



export default function getUsersData() {
  return dispatch => {
    dispatch(showLoading())
    _getUsers().then(users => {
      dispatch(getUsers(users));
      dispatch(hideLoading())
    });
  };
}

export function getQuestionsData() {
  return dispatch => {
    _getQuestions().then(questions => {
      // console.log(questions);
      dispatch(getQuestions(questions));
    });
  };
}

export function addQuestion(question, dispatch) {
  console.log(question);
  _saveQuestion(question).then(() => {
    dispatch(getQuestionsData());
  });
}
export function updateAnswer(info, dispatch) {
  console.log(info);
  _saveQuestionAnswer(info).then(() => {
    dispatch(getQuestionsData());
    dispatch(getUsersData());
    dispatch(isAnswered(true));
  });
}
