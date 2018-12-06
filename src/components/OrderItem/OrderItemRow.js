import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class OrderItemRow extends Component {
  render() {
    const orderItem = this.props.orderItem;
    const item = this.props.items.find(item => item.id === orderItem.item);
    let placeHolder =
      "https://i0.wp.com/hranew.com/wp-content/uploads/2015/04/shop-placeholder.png";

    return (
      <tr>
        <td>
          <img
            alt="describes smth smth"
            style={{ width: "100px", height: "100px" }}
            src={item.image || placeHolder}
          />
        </td>
        <td>
          <Link className="" to={`/items/${item.id}`}>
            <h2>{item.name}</h2>
          </Link>
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
