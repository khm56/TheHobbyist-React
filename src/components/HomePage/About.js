import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

// Components

import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class About extends Component {
  render() {
    return (
      <div className="my-auto mx-auto">
        <h3 className="black-title">About</h3>
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

export default connect(mapStateToProps)(About);
