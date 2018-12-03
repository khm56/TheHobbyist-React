import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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
    this.setState({ address: e.target.value });
  }

  checkStock(cart) {
    cart.orderItems.forEach(orderItem => {
      let item_id = orderItem.item;
      let item = this.props.items.find(item => item.id === item_id);
      if (orderItem.quantity > item.stock) {
        alert(
          `${item.name} doesn't have enough stock please update your quantity`
        );
        // return <Redirect to="./cart" />;
      } else {
        this.props.setStock(item, orderItem.quantity);
      }
    });
  }
  confirmHandler() {
    let cart = this.props.cart;
    if (this.state.address === 0) {
      alert("Please choose address");
    } else {
      this.checkStock(cart);
      this.props.setStatus(
        cart.id,
        "O",
        this.props.history,
        this.state.address
      );
    }
  }

  render() {
    // const itemCards = this.props.items.map(item => (
    //   <ItemCard key={item.name} item={item} />
    // ));
    if (!this.props.profile) {
      return <Redirect to="/list" />;
    }
    console.log(actionCreators);
    let cart = this.props.cart;
    console.log(cart);
    let addresses;
    if (this.props.profile.addresses) {
      addresses = this.props.profile.addresses.map(address => (
        <option value={address.id}>{address.name}</option>
      ));
    }
    if (this.state.address === "Add") {
      return <Redirect to="/address" />;
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
    profile: state.auth.profile,
    items: state.items.items
  };
};
const mapDispatchToProps = dispatch => ({
  setStatus: (order_id, status, history, address_id) => {
    dispatch(actionCreators.setStatus(order_id, status, history, address_id));
  },
  setStock: (item, quantity) => {
    dispatch(actionCreators.setStock(item, quantity));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
