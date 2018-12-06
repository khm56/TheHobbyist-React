import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class AuthButton extends Component {
  render() {
    let buttons;

    if (this.props.user) {
      buttons = [
        <ul className="navbar-nav mr-5" key="dropdown">
          <li className="nav-item dropdown mr-4">
            <div
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span>{this.props.user.username.toUpperCase()}</span>
            </div>
            <div
              className="dropdown-menu  bg-dark "
              aria-labelledby="navbarDropdown"
            >
              <Link to="/profile" className="dropdown-item">
                <span className="p text-white">Profile</span>
              </Link>
              <div className="dropdown-divider" />

              <span className="dropdown-item" onClick={this.props.logout}>
                <span className="p text-white">Logout</span>
              </span>
            </div>
          </li>
          <li key="cartButton" className="nav-item active">
            <Link className="btn btn-outline-success btn-sm ml-3" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {" Cart "}
              <span className="badge badge-light">
                {" "}
                {this.props.cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      ];
    } else {
      buttons = [
        <ul className="navbar-nav mr-5">
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
    user: state.auth.user,
    cartItems: state.cart.cartItems
  };
};
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(actionCreators.logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
