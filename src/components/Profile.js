import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class Profile extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">Profile</h5>
        </div>
        <div className="card-footer">footer</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.prof.profile
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: userID => dispatch(actionCreators.fetchProfile(userID))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
