import React, { Component } from "react";

// Components
import OrderItemTable from "../OrderItem/OrderItemTable";

import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class checkoutDetail extends Component {
  componentDidMount() {}

  render() {
    let order = this.props.order;
    return (
      <div className="container">
        <div>
          <h3>{order.id}</h3>
          <h4>{order.status}</h4>
          <h4>{order.date}</h4>
          <h5>{/* Put Dropdown to add or choose address */}</h5>
        </div>
        <OrderItemTable orderItems={order.orderItems} />
      </div>
    );
  }
}

export default checkoutDetail;
