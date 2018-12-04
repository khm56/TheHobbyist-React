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

  // componentDidMount() {
  //  this.props.fetchProfile();
  // }
  // componentDidUpdate(prevProps) {}

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
    let cart = this.props.cart;
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
      <div className="container-fluid">
        <h1 className="black-title">Checkout</h1>
        <div className="row">
          <h5 className="p left">Choose Address</h5>
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
        <div classNme="col-12">
          <button
            className=" border-0 right button-text"
            onClick={() => this.confirmHandler()}
          >
            {" "}
            Confirm{" "}
          </button>
        </div>
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
  },
  fetchProfile: () => dispatch(actionCreators.fetchProfile())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
