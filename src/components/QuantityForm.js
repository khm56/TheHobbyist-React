import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions";

class QuantityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
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
            <form onSubmit={this.submitHandler} noValidate>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Quantity"
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
