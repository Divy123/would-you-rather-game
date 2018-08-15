import React from "react";
import { connect } from "react-redux";
import View from "./view";
import isAnswered from "../actions/isAnswered";
class Home extends React.Component {
  handleToggle = (e, change) => {
    const { dispatch } = this.props;
    e.preventDefault();
    change === "answered"
      ? dispatch(isAnswered(true))
      : dispatch(isAnswered(false));
  };
  render() {
    console.log("HOME.JS ", this.props);
    let { loggedUser, questions, users, ans } = this.props;
    let answered = Object.keys(loggedUser.answers);
    let unanswered = Object.keys(questions).filter(
      ques => !answered.includes(ques)
    );
    answered = answered.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );
    unanswered = unanswered.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    );

    return (
      <div className="home">
        <button
          className="toggle"
          onClick={e => this.handleToggle(e, "unanswered")}
        >
          Unanswered
        </button>
        <button
          className="toggle"
          onClick={e => this.handleToggle(e, "answered")}
        >
          Answered
        </button>
        {ans
          ? answered.map(a => (
              <View
                key={a}
                q={questions[a]}
                user={users[questions[a].author]}
              />
            ))
          : unanswered.map(u => (
              <View
                key={u}
                q={questions[u]}
                user={users[questions[u].author]}
              />
            ))}
      </div>
    );
  }
}
function mapStateToProps({
  getQuestions,
  getUsers,
  saveLoggedUser,
  saveAnswerState
}) {
  let users = getUsers.users;
  let loggedUserId = saveLoggedUser.loggedUserId;
  let questions = getQuestions.questions;
  let loggedUser = users[loggedUserId];
  let ans = saveAnswerState.ans;
  return {
    loggedUser,
    questions,
    users,
    ans
  };
}
export default connect(mapStateToProps)(Home);
