import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Components
import AuthButton from "./AuthButton";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark custom-nav">
        <Link
          className="navbar-brand"
          to="/home"
          style={{
            fontFamily: "Times New Roman, Times, serif",
            color: "white",
            fontWeight: "bold"
          }}
        >
          HOBBYIST
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/about">
                About <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/list">
                Products <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li>
              <AuthButton />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
export default connect(
  mapStateToProps,
  null
)(NavBar);
