import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as actionCreators from "../../store/actions";

// Components
import CheckoutDetail from "./checkoutDetail";

import { connect } from "react-redux";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value);
    if (e.target.value === "Add") {
      this.addAddress();
    }
    this.setState({ address: e.target.value });
  }

  componentDidMount() {}
  componentDidUpdate(prevProps) {}

  confirmHandler() {
    let cart = this.props.cart;
    console.log(this.props);
    this.props.setStatus(cart.id, "O", this.props.history, this.state.address);
  }

  addAddress() {
    console.log("Add Address");
  }
  render() {
    // const itemCards = this.props.items.map(item => (
    //   <ItemCard key={item.name} item={item} />
    // ));
    console.log(actionCreators);
    let cart = this.props.cart;
    console.log(cart);
    let addresses;
    if (this.props.profile.addresses) {
      addresses = this.props.profile.addresses.map(address => (
        <option value={address.id}>{address.name}</option>
      ));
    }
    return (
      <div className="Items mt-5">
        <h3>Checkout</h3>
        <div>
          <h1>Choose Address</h1>
          <select
            defaultValue={this.state.address}
            onChange={this.handleChange}
          >
            <option value="0">-------</option>
            {addresses}
            <option value="Add">Add Address</option>
          </select>
        </div>
        <div className="row">
          <CheckoutDetail order={cart} />
        </div>
        <button onClick={() => this.confirmHandler()}> Confirm </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    profile: state.auth.profile
  };
};
const mapDispatchToProps = dispatch => ({
  setStatus: (order_id, status, history, address_id) => {
    dispatch(actionCreators.setStatus(order_id, status, history, address_id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
