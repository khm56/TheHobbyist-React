import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// Components
import AuthButton from "./AuthButton";

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
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
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div>
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
