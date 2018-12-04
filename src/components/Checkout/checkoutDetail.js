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
      <div className="col-12">
        <div>
          <h5 className="p left">
            Order ID: {order.id} <br /> Date: {order.date}{" "}
          </h5>
          {/* <h4>{order.status}</h4> */}
          <br />
          <h5 className="p left" />
        </div>
        <OrderItemTable orderItems={order.orderItems} />
      </div>
    );
  }
}

export default checkoutDetail;
