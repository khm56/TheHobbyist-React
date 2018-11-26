import React, { Component } from "react";

import OrderRow from "./OrderRow";

class OrderTable extends Component {
  render() {
    const orders = this.props.orders.map(order => (
      <OrderRow key={order.id} order={order} />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Order Total</th>
          </tr>
        </thead>
        <tbody>{orders}</tbody>
      </table>
    );
  }
}

export default OrderTable;
