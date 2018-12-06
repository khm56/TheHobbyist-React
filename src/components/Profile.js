import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import OrderTable from "./Order/OrderTable";
import AddressList from "./Address/AddressList";
import CartTable from "./Cart/CartTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMobile } from "@fortawesome/free-solid-svg-icons";

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
        <div className="card-body rounded profile-card text-white">
          <div className="row">
            <div className="col-3">
              <img
                className=" shadow img-thumbnail img-fluid mx-auto border-0 m-2 rounded-circle"
                src={placeholder}
              />
              <h1 className="text-center ">
                <span class="text-white text-uppercase badge badge-warning shadow">
                  {this.props.profile.user.username}
                </span>
              </h1>
            </div>
            <div className="col mt-5 mx-3">
              <h1>
                {this.props.profile.user.first_name}{" "}
                {this.props.profile.user.last_name}
              </h1>
              <br />
              <h6>
                <span class="text-white badge-pill badge-secondary py-2 shadow">
                  <FontAwesomeIcon icon={faAt} />
                </span>{" "}
                {this.props.profile.user.email}{" "}
                <span class="text-white badge-pill badge-secondary py-2  shadow">
                  {" "}
                  <FontAwesomeIcon icon={faMobile} />
                </span>{" "}
                {this.props.profile.phoneNo}{" "}
              </h6>

              <br />
              <div>
                Profile Details <hr className="border " />{" "}
                {this.props.profile.bio}
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
          <div class="tab-content mx-3 rounded" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div>
                <OrderTable
                  orders={this.props.profile.orders}
                  items={this.props.items}
                />
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="text-dark">
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.prof.profile,
  checked: state.auth.checked,
  cart: state.cart.cartItems,
  items: state.items.items
});

const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
