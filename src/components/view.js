import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import Login from "./Login";
import { connect } from "react-redux";

class View extends React.Component {
  redirectHandler = (q, ans) => {
    
    this.props.history.push({
      pathname: `/questions/${q.id}`,
      state: { ans, q }
    });
  };

  render() {
    // console.log(this.props);
    const { ans, user, q } = this.props;
    // console.log(q, "View", ans);
    return (
      <div className="view" key={q.id}>
        <div style={{ width: "12vw" }}>
          <img src={user.avatarURL} className="user" />
        </div>
        <div style={{ width: "70vw" }}>
          <p className="ind-name">{user.name} asks</p>
          <p className="num">
            ...
            {q.optionOne.text}
          </p>
          <button className="poll" onClick={() => this.redirectHandler(q, ans)}>
            View Poll
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ans: state.saveAnswerState.ans
  };
};

export default withRouter(connect(mapStateToProps)(View));
