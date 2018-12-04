import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

// Components
import Carousel from "./Carousel.js";
import Category from "./Category.js";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class HomePage extends Component {
  render() {
    return (
      <div className="my-auto mx-auto">
        <h3 className="black-title">Home </h3>
        <Carousel />
        <Category />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    profile: state.auth.profile
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(HomePage);
