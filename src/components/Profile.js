import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import OrderTable from "./Order/OrderTable";
import AddressList from "./Address/AddressList";

// Actions
import * as actionCreators from "../store/actions";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }
  render() {
    if (!this.props.user && this.props.checked) {
      console.log("profile");
      return <Redirect to="/list" />;
    } else if (!this.props.profile) {
      return "loading...";
    }

    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">
            {this.props.profile.user.username}
          </h5>
          <img className="img-thumbnail" src={this.props.profile.img} />

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
            Bio : <br /> {this.props.profile.bio}
          </div>
          <br />
          <div>
            <AddressList addresses={this.props.profile.addresses} />
          </div>
          <br />

          <div>
            <OrderTable orders={this.props.profile.orders} />
          </div>
        </div>
        <div className="card-footer">footer</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.prof.profile,
  checked: state.auth.checked
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
