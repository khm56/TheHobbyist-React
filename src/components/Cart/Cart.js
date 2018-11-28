import React, { Component } from "react";

// Components
import OrderItemTable from "../OrderItem/OrderItemTable";
// import Loading from "./Loading";
// import AddBookModal from "./AddBookModal";

import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class Cart extends Component {
  componentDidMount() {}

  render() {
    let cart = this.props.cart;
    return (
      <div
        className="
      "
      >
        {/* <div>
          <h3>{order.id}</h3>
          <h4>{order.status}</h4>
          <h4>{order.date}</h4>
          <h4>{order.address.name}</h4>
          <h5>
            {order.address.governorate}, {order.address.area},{" "}
            {order.address.block}, {order.address.street}
          </h5>
          <h5>
            {order.address.house_building}, {order.address.floor},{" "}
            {order.address.appartment}
          </h5>
          <h5>{order.address.extra_directions}</h5>
        </div> */}
        <OrderItemTable orderItems={cart.cartItems} />
      </div>
    );
  }
}

let mapStateToProps = state => ({
  cart: state.cart.cart
});

export default Cart;
