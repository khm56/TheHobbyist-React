import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NumericInput from "react-numeric-input";
// Components

import { connect } from "react-redux";

import * as actionCreators from "../store/actions/index";
import QuantityForm from "./QuantityForm";
class ItemDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  handleChange(e) {
    this.setState({ quantity: e });
  }

  addToCart() {
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

  componentDidMount() {
    console.log(this.props.match.params.itemID);
    this.props.getItem(this.props.match.params.itemID);
  }
  componentDidUpdate() {
    this.props.getItem(this.props.match.params.itemID);
  }
  render() {
    if (!this.props.item.id) {
      return <Redirect to="/list" />;
    } else {
      const item = this.props.item;
      return (
        <div className="item">
          <div>
            <h3>{item.name}</h3>
            <h3>{item.category}</h3>
            <h3>{item.rating}</h3>
            <img
              src={item.image}
              className="img-thumbnail img-fluid"
              alt={item.name}
            />
            <h3>{item.description}</h3>
            <h3>{item.stock} Remaining</h3>

            <NumericInput
              onChange={this.handleChange}
              min={1}
              max={item.stock}
              value={this.state.quantity}
            />
            <button className="btn" onClick={this.addToCart}>
              ADD
            </button>

          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    item: state.item.item,
    cart: state.cart.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: itemID => dispatch(actionCreators.fetchItemDetail(itemID)),
    fetchProfile: () => dispatch(actionCreators.fetchProfile())
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
)(ItemDetail);
