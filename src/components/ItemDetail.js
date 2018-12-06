import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NumericInput from "react-numeric-input";
import Rating from "react-rating";
// Components
import ItemCard from "./ItemCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
  categoryType(x) {
    switch (x) {
      case "A":
        return "Art";
      case "M":
        return "Music";
      case "S":
        return "Sports";
      case "T":
        return "Tech";
      case "B":
        return "Books";

        break;
      default:
    }
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
      let number = 4;
      let randomItems = this.props.items.map(item => {
        if (number > 0) {
          number--;
          return <ItemCard key={item.id} item={item} />;
        }
      });
      let placeHolder =
        "https://i0.wp.com/hranew.com/wp-content/uploads/2015/04/shop-placeholder.png";
      return (
        <div className="container">
          <div className=" card border-0 p-3 mt-3 ">
            <div className="row mt-3 justify-content-center">
              <div className="col-8 text-center">
                <img
                  src={item.image || placeHolder}
                  className="img-thumbnail img-fluid border "
                  alt={item.name}
                  style={{
                    height: "450px",
                    width: "450px",
                    objectFit: "contain"
                  }}
                />
                <div className="row justify-content-center">
                  <img
                    src={item.image || placeHolder}
                    className="img-thumbnail img-fluid border m-3"
                    alt={item.name}
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "contain"
                    }}
                  />
                  <img
                    src={item.image || placeHolder}
                    className="img-thumbnail img-fluid border m-3"
                    alt={item.name}
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "contain"
                    }}
                  />
                  <img
                    src={item.image || placeHolder}
                    className="img-thumbnail img-fluid border m-3"
                    alt={item.name}
                    style={{
                      height: "150px",
                      width: "150px",
                      objectFit: "contain"
                    }}
                  />
                </div>
              </div>
              <div className="col row mt-5 ml-2 text-white card bg-dark p-3">
                <h3 className="  font-weight-light">{item.name}</h3>
                <h3>
                  <span className="text-white text-uppercase badge badge-warning shadow">
                    {this.categoryType(item.category)}
                  </span>
                </h3>
                <p>Free delivery usually within 3 working days.</p>
                <i className="fa fa-star-o fa-2x text-white" />
                <Rating
                  stop={6}
                  emptySymbol={
                    <FontAwesomeIcon
                      className="text-white"
                      icon="fa fa-star-o fa-2x"
                    />
                  }
                  fullSymbol={
                    <FontAwesomeIcon
                      className="text-white"
                      icon="fa fa-star-o fa-2x"
                    />
                  }
                />

                <h3>
                  <span className="text-white text-uppercase badge badge-success shadow">
                    {item.price} KWD
                  </span>
                </h3>
                <h4>
                  <span
                    className={
                      item.stock > 0
                        ? `text-white badge btn-success shadow`
                        : `text-white badge btn-danger shadow`
                    }
                  >
                    Currently {item.stock > 0 ? "in" : "out of"} stock!
                  </span>
                </h4>
                <hr />
                <h3>Quick Overview</h3>
                <p className="mr-2">{item.description}</p>
                <div className=" row m-2">
                  <NumericInput
                    className="form-control col"
                    size="3"
                    style={{ height: "100%" }}
                    strict="true"
                    onChange={this.handleChange}
                    min={1}
                    max={item.stock}
                    value={this.state.quantity}
                  />
                  <button
                    className="btn btn-success col mx-3"
                    onClick={this.addToCart}
                  >
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="row mt-5">
              <h1 className="black-title text-center">
                More Items you may like
              </h1>
            </div>
            <div className="row justify-content-center ">{randomItems}</div>
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
