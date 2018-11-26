import React, { Component } from "react";

import OrderItemRow from "./OrderItemRow";

class OrderItemTable extends Component {
  render() {
    const orderItemRow = this.props.orderItems.map(orderItem => (
      <OrderItemRow key={orderItem.id} orderItem={orderItem} />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{OrderItemRow}</tbody>
      </table>
    );
  }
}

export default OrderItemTable;
