import React from "react";
import { connect } from "react-redux";
import {ProgressBar} from "react-bootstrap";
class Result extends React.Component {
  render() {
    let { q, loggedUserId, users, ques } = this.props;
    let op1votes = ques[q.id].optionOne.votes.length;
    let op2votes = ques[q.id].optionTwo.votes.length;
    return (
      <div>
        {q.optionOne.votes.indexOf(loggedUserId) > -1 ? (
          <div>
            <div className="voted">
              <p className='opt-text'>{q.optionOne.text}</p>
              <p className='count'>
                {op1votes} out of
                {op1votes + op2votes}
                <br/>
                {op1votes/(op1votes+op2votes)*100}%
              </p>
              
              <h2>Your vote</h2>
            </div>
            <div className="unvoted">
              <p className='opt-text'>{q.optionTwo.text}</p>
              <p className='count'>
                {op2votes} out of
                {op1votes + op2votes}
                <br/>
                {op2votes/(op1votes+op2votes)*100}%
              </p>
              
            </div>
          </div>
        ) : (
          <div>
            <div className="unvoted">
              <p className='opt-text'>{q.optionOne.text}</p>
              <p className='count'>
                {op1votes} out of
                {op1votes + op2votes}<br/>
                {op1votes/(op1votes+op2votes)*100}%
              </p>
              
            </div>
            <div className="voted">
              <p className='opt-text'>{q.optionTwo.text}</p>
              <p className='count'>
                {op2votes} out of {op1votes + op2votes}<br/>
                {op2votes/(op1votes+op2votes)*100}%
              </p>
              
              <h2>Your vote</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps({ getUsers, getQuestions }) {
  let users = getUsers.users;
  let ques = getQuestions.questions;
  return {
    users,
    ques
  };
}
export default connect(mapStateToProps)(Result);
