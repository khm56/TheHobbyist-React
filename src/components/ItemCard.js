import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
class ItemCard extends Component {
  cart() {
    console.log("please work");
    return <Redirect to="/cart" />;
  }
  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <div className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{item.name} </span>
              <span>{item.price} KD</span>
            </h5>
            <button onClick={() => this.props.addItem(item)}>Add</button>
            <div>
              <Link to="/cart">Checkout</Link>
            </div>
            <small className="card-text">{item.description}</small>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionsToProps = dispatch => {
  return {
    addItem: item => dispatch(actionCreators.addItemToCart(item))
  };
};

export default connect(
  null,
  mapActionsToProps
)(ItemCard);
