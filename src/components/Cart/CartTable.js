import React, { Component } from "react";
import { connect } from "react-redux";

import CartRow from "./CartRow";

class CartTable extends Component {
  render() {
    let total = 0;
    const cartRow = this.props.orderItems.map(orderItem => {
      total +=
        orderItem.quantity *
        this.props.items.find(item => item.id === orderItem.item).price;
      return <CartRow key={orderItem.id} orderItem={orderItem} />;
    });
    return (
      <div className="container">
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
        <div className="row">
          <h2>Total : {total}</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  };
};
export default connect(mapStateToProps)(CartTable);
