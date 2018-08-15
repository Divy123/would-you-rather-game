import React, { Fragment } from "react";
import getUsersData, { getQuestionsData } from "../actions/async";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import Ques from "./Ques";



class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsersData());
    this.props.dispatch(getQuestionsData());
    this.forceUpdate();
  }
  render() {
    console.log("APP.JS", this.props);
    let { loggedUserId } = this.props;

    return (
      <Fragment>
        <Nav />
        <Route path="/login" component={Login} />
       ]<Route
          exact
          path="/leaderboard"
          render={() =>
            loggedUserId === undefined ? (
              <Redirect to="/login" />
            ) : (
              <Leaderboard />
            )
          }
        />
        <Route
          exact
          path="/add"
          render={() =>
            loggedUserId === undefined ? (
              <Redirect to="/login" />
            ) : (
              <NewQuestion />
            )
          }
        />
        <Route
          exact
          path="/"
          render={() =>
            loggedUserId === undefined ? <Redirect to="/login" /> : <Home />
          }
        />
        <Route
          path="/question/:id"
          exact
          render={() =>
            loggedUserId === undefined ? (
              <Redirect to="/login" />
            ) : (
              <Ques {...this.props.location.state} />
            )
          }
        />
      </Fragment>
    );
  }
}
function mapStateToProps({ saveLoggedUser }) {
  let loggedUserId =
    saveLoggedUser !== undefined ? saveLoggedUser.loggedUserId : undefined;
  return { loggedUserId };
}
export default withRouter(connect(mapStateToProps)(App));
