import React from "react";
import { connect } from "react-redux";
import saveLoggedUser from "../actions/loggedUser";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
class Login extends React.Component {
  handleLogUser = e => {
    this.props.dispatch(saveLoggedUser(e));
    this.props.history.push('/');
  };
 
  render() {
    let { users, loggedUserId } = this.props;
    let loginPage = null;
    if (users) {
      loginPage = (
        <select onChange={e => this.handleLogUser(e.target.value)}>
         <option key={Math.random()} >Select a user</option>
          {Object.values(users).map(user => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      );
    }
    if (loggedUserId) {
      loginPage = <button onClick={()=>this.handleLogUser(undefined)} style={{marginLeft:'16vw'}}>Logout</button>;
    }
    return (
      <div className="log">
       <h2>Login Page</h2>
        <p id='welcome'>Welcome to Would You rather game</p>
        {loginPage}
      </div>
    );
  }
}
function mapStateToProps({ getUsers, saveLoggedUser }) {
  let users = getUsers.users;
  let loggedUserId = saveLoggedUser.loggedUserId;
  
  return {
    users,
    loggedUserId
  };
}
export default withRouter(connect(mapStateToProps)(Login));
