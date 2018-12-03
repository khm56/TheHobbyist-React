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
    let orderItem =
      this.props.cart.orderItems.filter(item => {
        return item.item === this.props.item.id;
      }).length > 0;

    if (
      this.props.cart.id &&
      this.props.item.id &&
      this.state.quantity <= this.props.item.stock &&
      !orderItem
    ) {
      this.props.addItemToCart(
        this.props.item,
        this.props.cart,
        this.state.quantity,
        this.props.history
      );
    } else if (orderItem) {
      let integerquantity = +this.state.quantity;
      let retrieveOrderItem = this.props.cart.orderItems.find(item => {
        return item.item === this.props.item.id;
      });
      let quantityToBePassed = retrieveOrderItem.quantity + integerquantity;
      this.props.updateOrderItemInCart(
        retrieveOrderItem.id,
        quantityToBePassed,

        this.props.history
      );
    } else {
      this.props.addItemToCart(item, cart.id, this.state.quantity);
    }


    console.log(orderItem);
    this.setState({ quantity: 0 });


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

    addItemToCart: (item_id, order_id, quantity, history) =>
      dispatch(
        actionCreators.createOrderItem(item_id, order_id, quantity, history)
      ),

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
