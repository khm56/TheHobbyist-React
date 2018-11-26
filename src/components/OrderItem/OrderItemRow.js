import React, { Component } from "react";
import { connect } from "react-redux";

class OrderItemRow extends Component {
  render() {
    const orderItem = this.props.orderItem;
    const item = this.props.items.find(item => item.id === orderItem.item);
    return (
      <tr>
        <td>
          {item.image ? (
            <img style={{ width: "100px", height: "100px" }} src={item.image} />
          ) : (
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://www.w3schools.com/w3css/img_lights.jpg"
            />
          )}
        </td>
        <td>
          <h2>{item.name}</h2>
        </td>
        <td>{orderItem.quantity}</td>
        <td>
          <div className="row">{item.price}</div>
          <div className="row">
            <h5>Total: {item.price * orderItem.quantity}</h5>
          </div>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items.items
  };
};
export default connect(mapStateToProps)(OrderItemRow);
