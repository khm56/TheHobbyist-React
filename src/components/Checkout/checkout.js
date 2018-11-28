import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import * as actionCreators from "../../store/actions";

// Components
import OrderDetail from "../OrderItem/OrderDetail";

import { connect } from "react-redux";

class Checkout extends Component {
  componentDidMount() {}
  componentDidUpdate(prevProps) {}

  confirmHandler() {
    let cart = this.props.cart;
    console.log(this.props);
    this.props.setStatus(cart.id, "O");
  }
  render() {
    // const itemCards = this.props.items.map(item => (
    //   <ItemCard key={item.name} item={item} />
    // ));
    console.log(actionCreators);
    let cart = this.props.cart;
    console.log(cart);
    return (
      <div className="Items">
        <h3>Checkout</h3>
        <div className="row">
          <OrderDetail order={cart} />
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
  setStatus: (order_id, status) => {
    dispatch(actionCreators.setStatus(order_id, status));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
