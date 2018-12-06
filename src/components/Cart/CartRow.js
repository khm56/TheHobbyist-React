import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import NumericInput from "react-numeric-input";

import * as actionCreators from "../../store/actions";

class CartRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.orderItem.quantity
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(number) {
    const orderItem = this.props.orderItem;
    const item = this.props.items.find(item => item.id === orderItem.item);
    console.log(item);
    if (number > item.stock) {
      alert("Invalid Quantity because required stock unavailable");
    } else {
      this.setState({ quantity: number }, () => this.updateQuantity());
    }
  }

  updateQuantity() {
    this.props.updateQuantity(
      this.props.orderItem.id,
      this.state.quantity,
      this.props.history
    );
  }
  render() {
    const orderItem = this.props.orderItem;
    const item = this.props.items.find(item => item.id === orderItem.item);
    let placeHolder =
      "https://i0.wp.com/hranew.com/wp-content/uploads/2015/04/shop-placeholder.png";

    return (
      <tr className="tableMid">
        <td>
          <img
            style={{ width: "100px", height: "100px" }}
            src={item.image || placeHolder}
          />
        </td>
        <td>
          <Link to={`/items/${item.id}`} className="">
            <h2 className="border-0">{item.name}</h2>
          </Link>
        </td>
        <td>
          <NumericInput
            strict={true}
            className="border-0"
            size="5"
            onChange={this.handleChange}
            min={1}
            max={item.stock}
            value={this.state.quantity}
          />
        </td>
        <td>
          <div className="row">
            price per unit <br /> {item.price}
          </div>
          <div className="row">
            <h5>
              Total: {(item.price * this.state.quantity).toFixed(3)}
              KD
            </h5>
          </div>
        </td>
        <td>
          <button className="btn btn-outline-danger">Delete</button>
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
const mapActionToState = dispatch => {
  return {
    updateQuantity: (orderItem_id, quantity, history) =>
      dispatch(
        actionCreators.updateOrderItemInCart(orderItem_id, quantity, history)
      )
  };
};
export default connect(
  mapStateToProps,
  mapActionToState
)(CartRow);
