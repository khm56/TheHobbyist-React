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
    let placeHolder =
      "https://i0.wp.com/hranew.com/wp-content/uploads/2015/04/shop-placeholder.png";
    return (
      <div className="card m-3">
        <Link to={`/items/${item.id}`}>
          <div className="image" style={{ width: "250px", height: "200px" }}>
            <img
              className="card-img-top img-fluid"
              src={item.image || placeHolder}
              alt={item.name}
              style={{
                height: "200px",
                width: "250px",
                objectFit: "contain"
              }}
            />
          </div>
        </Link>

        <div className="card-body ">
          <span className="card-title">{item.name} </span>
          <br />
          <span className="card-text">{item.price} KD</span>
          <button className="btn btn-primary" onClick={() => this.addToCart()}>
            Add
          </button>
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
