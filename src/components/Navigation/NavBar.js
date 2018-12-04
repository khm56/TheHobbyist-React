import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Components
import AuthButton from "./AuthButton";

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link
          className="navbar-brand"
          to="/list"
          style={{
            fontFamily: "Times New Roman, Times, serif",
            color: "white",
            fontWeight: "bold"
          }}
        >
          The Hobbyist
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/list">
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>

          <AuthButton />
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
