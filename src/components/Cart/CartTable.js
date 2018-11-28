import React, { Component } from "react";

import CartRow from "./CartRow";

class CartTable extends Component {
  render() {
    const cartRow = this.props.orderItems.map(orderItem => (
      <CartRow key={orderItem.id} orderItem={orderItem} />
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
        <tbody>{cartRow}</tbody>
      </table>
    );
  }
}

export default CartTable;
