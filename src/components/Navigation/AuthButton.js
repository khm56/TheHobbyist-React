import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

// Fontawesome
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/*import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";
*/
class AuthButton extends Component {
  render() {
    let buttons;

    if (this.props.user) {
      buttons = (
        <li className="nav-item" onClick={this.props.logout}>
          <span className="nav-link">Logout</span>
        </li>
      );
    } else {
      buttons = [
        <li key="loginButton" className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>,
        <li key="signupButton" className="nav-item">
          <Link to="/signup" className="nav-link">
            Signup
          </Link>
        </li>
      ];
    }

    return (
      <ul className="navbar-nav ml-auto">
        {/* <span className="navbar-text">{user.username}</span> */}
        {buttons}
      </ul>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
