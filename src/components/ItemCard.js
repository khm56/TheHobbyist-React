import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
      <div className="card bg-dark text-white border-0 m-3">
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
          <span className="card-title font-weight-bold">{item.name} </span>
          <br />
          <span className="card-text font-weight-light">{item.price} KWD</span>
          <button
            className="btn btn-warning  float-right"
            onClick={() => this.addToCart()}
          >
            <FontAwesomeIcon icon={faPlus} />
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
