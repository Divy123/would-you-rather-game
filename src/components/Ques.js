import React from "react";
import { connect } from "react-redux";
import Result from "./result";
import { updateAnswer } from "../actions/async";
import { withRouter } from "react-router-dom";
import Error from './err';
class Ques extends React.Component {
  state = {
    selectedOptionText: ""
  };

  handleSelectedOption = event => {
    this.setState({ selectedOptionText: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let { q, dispatch } = this.props;
    // console.log("Ques.JS", q, dispatch);
    let answer =
      this.state.selectedOptionText === q.optionOne.text
        ? "optionOne"
        : "optionTwo";

    let info = { authedUser: this.props.loggedUserId, qid: q.id, answer };
    updateAnswer(info, dispatch);
  };

  render() {
    console.log(this.props)
    let { ans, questions, loggedUserId, users } = this.props;
    let q=questions[this.props.match.params.id];
    if(q)
    return (
      <div className="fresh">
        <h3>Asked by {users[q.author].name}</h3>
        <img src={users[q.author].avatarURL} className="user" />
        {ans ? (
          <Result q={q} loggedUserId={loggedUserId} />
        ) : (
          <div>
            <label>
              <input
                type="radio"
                value={q.optionOne.text}
                checked={this.state.selectedOptionText === q.optionOne.text}
                onChange={this.handleSelectedOption}
              />
              {q.optionOne.text}
            </label>
            <br />
            <label>
              <input
                type="radio"
                value={q.optionTwo.text}
                checked={this.state.selectedOptionText === q.optionTwo.text}
                onChange={this.handleSelectedOption}
              />
              {q.optionTwo.text}
            </label>
            <br />
            <button onClick={e => this.handleSubmit(e)}>Submit</button>
          </div>
        )}
      </div>
    );
    else return (
      <Error/>
    )
  }
}
function mapStateToProps({ saveLoggedUser, getUsers,getQuestions, saveAnswerState }) {
  let loggedUserId = saveLoggedUser.loggedUserId;
  let users = getUsers.users;
  let ans = saveAnswerState.ans;
  let questions=getQuestions.questions;
  return {
    loggedUserId,
    users,
    ans,
    questions
  };
}
export default withRouter(connect(mapStateToProps)(Ques));
