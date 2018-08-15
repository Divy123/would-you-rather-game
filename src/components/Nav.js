import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import Aux from "./aux";

class Nav extends React.Component {
  render() {
    // console.log(this.props.user, "user");
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/leaderboard" exact className="activeclass">
              Leaderboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/" exact className="activeclass">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" exact className="activeclass">
              New Question
            </NavLink>
          </li>
          {this.props.user ? (
            <Aux>
              <li>
                <NavLink to="/login" exact className="activeclass">
                  Logout
                </NavLink>
              </li>
              <li>
                <NavLink to="" exact className="activeclass">
                  Hello,
                  {this.props.user.name}
                </NavLink>
                <img src={this.props.user.avatarURL} className='logged-user-image' />
              </li>
            </Aux>
          ) : null}
        </ul>
      </nav>
    );
  }
}
function mapStateToProps({ getUsers, saveLoggedUser }) {
  let user, loggedUserId;
  //   console.log(saveLoggedUser.);
  if (saveLoggedUser.loggedUserId) {
    let users = getUsers.users;
    loggedUserId = saveLoggedUser.loggedUserId;
    user = users[loggedUserId];
   
  } else {
    user = undefined;
  }
  return {
    user
  };
}

export default connect(mapStateToProps)(Nav);
