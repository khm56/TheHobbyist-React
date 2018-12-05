import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import OrderTable from "./Order/OrderTable";
import AddressList from "./Address/AddressList";
import CartTable from "./Cart/CartTable";

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
    const placeholder =
      "http://pronksiapartments.ee/wp-content/uploads/2015/10/placeholder-face-big.png";
    return (
      <div className="jumbotron p-0 m-5">
        <div className="card-body rounded bg-dark text-white">
          <div className="row">
            <div className="col-3">
              <img
                className="img-thumbnail img-fluid mx-auto border-0 m-2 rounded-circle"
                src={placeholder}
              />
            </div>
            <div className="col mt-5 mx-3">
              <h5 className="card-title mb-4 text-uppercase">
                {this.props.profile.user.username}
              </h5>
              <div>
                {this.props.profile.user.first_name}{" "}
                {this.props.profile.user.last_name}
              </div>
              <br />
              <div> email: {this.props.profile.user.email} </div>
              <div> phone no : {this.props.profile.phoneNo} </div>

              <br />
              <div>
                Bio : <br /> {this.props.profile.bio}
              </div>
            </div>
          </div>

          <br />
          <ul
            class="nav nav-tabs mx-3 text-uppercase"
            id="myTab"
            role="tablist"
          >
            <li class="nav-item">
              <a
                class="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Previous Orders
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                AddressBook
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Cart
              </a>
            </li>
          </ul>
          <div class="tab-content mx-3" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div>
                <OrderTable orders={this.props.profile.orders} />
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div>
                <AddressList addresses={this.props.profile.addresses} />
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <CartTable orderItems={this.props.cart} />
            </div>
          </div>

          <br />
        </div>
        <div className="card-footer">footer</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.prof.profile,
  checked: state.auth.checked,
  cart: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
