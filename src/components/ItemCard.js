import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 ">
        <div className="card mb-3" style={{ width: "250px", height: "300px" }}>
          <Link to={`/items/${item.id}`}>
            <div className="image" style={{ width: "250px", height: "200px" }}>
              <img
                className="card-img-top img-fluid"
                src={item.image}
                alt={item.name}
                style={{
                  height: "200px",
                  width: "250px",
                  objectFit: "contain"
                }}
              />
            </div>
          </Link>

          <div className="card-body yellow-bg">
            <div className="row ">
              <div className="col ">
                <div className="left p ">
                  <span className="card-title">{item.name} </span>
                  <br />
                  <span className="card-text">{item.price} KD</span>
                </div>
              </div>
              <div className="col">
                <button
                  className="btn-yellow right"
                  onClick={() => this.addToCart()}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
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
