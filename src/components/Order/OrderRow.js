import React, { Component } from "react";

class OrderRow extends Component {
  render() {
    const order = this.props.order;
    return (
      <tr>
        <td>{order.id}</td>
        <td>
          <h2>{order.date}</h2>
        </td>
        <td>{order.quantity}</td>
        <td>
          (order.address && <div className="row">{order.address}</div>)
          <div className="row">
            <h5>Total: {order.total}</h5>
          </div>
        </td>
      </tr>
    );
  }
}

export default OrderRow;
