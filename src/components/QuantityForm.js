import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import NumericInput from "react-numeric-input";

import * as actionCreators from "../store/actions";

class QuantityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addToCart(e) {
    e.preventDefault();
    let item = this.props.item.id;
    let cart = this.props.cart;
    let check = cart.orderItems.find(orderItem => {
      if (orderItem.item === item) {
        return orderItem;
      }
    });
    if (check) {
      this.props.updateOrderItemInCart(
        check.id,
        check.quantity + this.state.quantity,
        this.props.history
      );
    } else {
      this.props.addItemToCart(item, cart.id, this.state.quantity);
    }
  }

  render() {
    if (!this.props.user) {
      return <Redirect to="/list" />;
    } else {
      return (
        <div className="card col-6 mx-auto p-0 mt-5">
          <div className="card-body">
            <form onSubmit={this.addToCart} noValidate>
              <div className="form-group">
                <NumericInput
                  className="numberinput form-control"
                  type="number"
                  min="1"
                  max={this.props.item.stock}
                  name="quantity"
                  required
                  value={this.state.quantity}
                  onChange={this.changeHandler}
                />
              </div>
              <input className="btn btn-primary" type="submit" value="Add" />
            </form>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getItem: itemID => dispatch(actionCreators.fetchItemDetail(itemID)),
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
  mapDispatchToProps
)(QuantityForm);
