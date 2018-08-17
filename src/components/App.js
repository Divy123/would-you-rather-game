import React, { Fragment } from "react";
import getUsersData, { getQuestionsData } from "../actions/async";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import { connect } from "react-redux";
import { Route, Redirect, withRouter, Switch } from "react-router-dom";
import Ques from "./Ques";
import addInitialRoute from "../actions/addInitialRoute";
import Error from "../components/err";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsersData());
    this.props.dispatch(getQuestionsData());
    this.forceUpdate();
  }
  render() {
    let { loggedUserId, initialRoute } = this.props;
    let route = this.props.location.pathname;
    console.log("route", route);
    route !== "/login"
      ? this.props.dispatch(addInitialRoute(this.props.location.pathname))
      : null;
    console.log("initialroute", initialRoute);
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />]
          <Route
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
            path="/questions/:id"
            exact
            render={() =>
              loggedUserId === undefined ? (
                <Redirect to="/login" />
              ) : (
                <Ques {...this.props.location.state} />
              )
            }
          />
          <Route component={Error} />
        </Switch>
      </Fragment>
    );
  }
}
function mapStateToProps({ saveLoggedUser, addRoute }) {
  let loggedUserId =
    saveLoggedUser !== undefined ? saveLoggedUser.loggedUserId : undefined;
  let { initialRoute } = addRoute;
  return { loggedUserId, initialRoute };
}
export default withRouter(connect(mapStateToProps)(App));
