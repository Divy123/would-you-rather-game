import React from "react";
import { connect } from "react-redux";
import saveLoggedUser from "../actions/loggedUser";

class Login extends React.Component {
  handleLogUser = e => {
    this.props.dispatch(saveLoggedUser(e));
  };
 
  render() {
    let { users, loggedUserId } = this.props;
    let loginPage = null;
    if (users) {
      loginPage = (
        <select onChange={e => this.handleLogUser(e.target.value)}>
          {Object.values(users).map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      );
    }
    if (loggedUserId) {
      loginPage = <button onClick={()=>this.handleLogUser(undefined)}>Logout</button>;
    }
    return (
      <div className="log">
        Login Page
        <p>Welcome to Would You rather game</p>
        {loginPage}
      </div>
    );
  }
}
function mapStateToProps({ getUsers, saveLoggedUser }) {
  let users = getUsers.users;
  let loggedUserId = saveLoggedUser.loggedUserId;
  console.log(loggedUserId);
  return {
    users,
    loggedUserId
  };
}
export default connect(mapStateToProps)(Login);
