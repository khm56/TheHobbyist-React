import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
class ItemCard extends Component {
  addToCart() {
    let item = this.props.item;
    let cart = this.props.cart;
    let check = cart.orderItems.find(orderItem => {
      if (orderItem.item === item.id) {
        return orderItem;
      }
    });
    if (check) {
      this.props.updateOrderItemInCart(
        check.id,
        check.quantity + 1,
        this.props.history
      );
    } else {
      this.props.addItemToCart(item.id, cart.id, 1);
    }
  }
  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/items/${item.id}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={item.image}
              alt={item.name}
            />
          </div>
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <span>{item.name}</span>
            <span>{item.price} KD</span>
          </h5>
          <button onClick={() => this.addToCart()}>Add</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};
const mapActionsToProps = dispatch => {
  return {
    addItemToCart: (item_id, order_id, quantity) =>
      dispatch(actionCreators.createOrderItem(item_id, order_id, quantity)),

    updateOrderItemInCart: (orderItem_id, quantity, history) =>
      dispatch(
        actionCreators.updateOrderItemInCart(orderItem_id, quantity, history)
      )
  };
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(ItemCard);
