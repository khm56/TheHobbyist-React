import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import CartTable from "./CartTable";

import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class Cart extends Component {
  componentDidMount() {}

  render() {
    let cart = this.props.cart;
    return (
      <div className="">
        <h1 className="black-title"> Cart </h1>
        <CartTable orderItems={cart} />
        <div className="text-center">
          <Link
            className="button-text"
            style={{ textAligh: "center" }}
            to="/checkout"
          >
            {" "}
            Checkout{" "}
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cartItems
});
const mapDispatchToProps = dispatch => ({
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
