import React, { Component } from "react";

class OrderRow extends Component {
  render() {
    const order = this.props.order;
    let total = 0;
    order.orderItems.forEach(orderItem => {
      this.props.items.forEach(item => {
        if (item.id === orderItem.item) {
          total += orderItem.quantity * item.price;
        }
      });
    });
    return (
      <tr>
        <td>{order.id}</td>
        <td>
          <h2>{order.date}</h2>
        </td>
        <td>{order.status}</td>
        <td>
          {order.address && (
            <div className="row"> Address : {order.address.name}</div>
          )}
          <div className="row">
            <h5>{total.toFixed(3)} KWD</h5>
          </div>
        </td>
      </tr>
    );
  }
}

export default OrderRow;
