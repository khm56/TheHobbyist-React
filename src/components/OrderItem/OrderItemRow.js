import React, { Component } from "react";

class OrderItemRow extends Component {
  render() {
    const orderItem = this.props.orderItem;
    return (
      <tr>
        <td>
          {orderItem.item.image}?<img src={orderItem.item.image} />:
          <img src="https://www.w3schools.com/w3css/img_lights.jpg" />
        </td>
        <td>
          <h2>{orderItem.item.name}</h2>
        </td>
        <td>{orderItem.quantity}</td>
        <td>
          <div className="row">{orderItem.item.price}</div>
          <div className="row">
            <h5>Total: {orderItem.item.price * orderItem.quantity}</h5>
          </div>
        </td>
      </tr>
    );
  }
}

export default OrderItemRow;
