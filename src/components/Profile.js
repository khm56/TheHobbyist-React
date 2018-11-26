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
          <h5 className="card-title mb-4">
            {this.props.profile.user.username}
          </h5>
          <img src={this.props.profile.img} />

          <div>
            {this.props.profile.user.first_name}{" "}
            {this.props.profile.user.last_name}
          </div>
          <br />
          <div> email: {this.props.profile.user.email} </div>
          <div> phone no : {this.props.profile.phoneNo} </div>

          <div> BD : {this.props.profile.birth_date} </div>
          <br />
          <div>
            {" "}
            Bio : <br /> {this.props.profile.bio}{" "}
          </div>
          <br />
          <div> list of address book </div>
          <br />
          <div> order dashbaord </div>
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
