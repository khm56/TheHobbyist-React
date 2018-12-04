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
      buttons = [
        <ul class="navbar-nav mr-5">
          <li class="nav-item dropdown mr-4">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="">{this.props.user.username.toUpperCase()}</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/profile" className="dropdown-item">
                <span className="p">Profile</span>
              </Link>
              <span className="dropdown-item" onClick={this.props.logout}>
                <span className="p">Logout</span>
              </span>
              <div class="dropdown-divider" />
            </div>
          </li>
          <li key="cartButton" className="nav-item active">
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </li>
        </ul>
      ];
    } else {
      buttons = [
        <ul class="navbar-nav mr-5">
          <li key="loginButton" className="nav-item active">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
          ,
          <li key="signupButton" className="nav-item active">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
        </ul>
      ];
    }

    return <ul className="navbar-nav ml-auto">{buttons}</ul>;
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
