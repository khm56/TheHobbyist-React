import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NumericInput from "react-numeric-input";
// Components
import ItemCard from "./ItemCard";

import { connect } from "react-redux";

import * as actionCreators from "../store/actions/index";
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
  componentDidUpdate() {}
  render() {
    if (!this.props.item.id) {
      return <Redirect to="/list" />;
    } else {
      const item = this.props.item;
      let number = 5;
      let randomItems = this.props.items.map(item => {
        if (number > 0) {
          number--;
          return <ItemCard key={item.id} item={item} />;
        }
      });
      return (
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-6 text-right">
              <img
                src={item.image}
                className="img-thumbnail img-fluid border"
                alt={item.name}
                style={{
                  height: "750px",
                  width: "750px",
                  objectFit: "contain"
                }}
              />
            </div>
            <div className="col-6">
              <h3 className="black-title">{item.name}</h3>
              <p className="p">
                Category: <h5 style={{ color: "red" }}>{item.category}</h5>
              </p>
              <p className="p">
                Price: <h5 style={{ color: "red" }}>{item.price} KD</h5>
              </p>
              <p className="p">
                Description: <h5>{item.description}</h5>
              </p>
              <p className="p">
                Stock Available: <h5>{item.stock}</h5>
              </p>

              <NumericInput
                className="input border-0"
                size="3"
                style={{ height: "100%" }}
                strict="true"
                onChange={this.handleChange}
                min={1}
                max={item.stock}
                value={this.state.quantity}
              />
              <button className="btn btn-primary" onClick={this.addToCart}>
                ADD
              </button>
            </div>
          </div>
          <div className="mx-auto my-auto">
            <div className="row mt-5">
              <h1 className="black-title text-center">
                More Items you may like
              </h1>
            </div>
            <div className="row mx-5">{randomItems}</div>
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
    cart: state.cart.cart,
    items: state.items.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItem: itemID => dispatch(actionCreators.fetchItemDetail(itemID)),
    fetchProfile: () => dispatch(actionCreators.fetchProfile()),
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
