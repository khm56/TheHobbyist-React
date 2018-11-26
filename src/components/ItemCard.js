import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
class ItemCard extends Component {
  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/items/${item.id}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={item.image}
              alt={item.name}
            />
          </div>
        </Link>
        <div className="card-body">
          <h5 className="card-title">
            <span>{item.name}</span>
            <span>{item.price} KD</span>
          </h5>
          <button onClick={() => this.props.addItemToCart()}>Add</button>
        </div>
      </div>
    );
  }
}

const mapActionsToProps = dispatch => {
  return {
    addItemToCart: () => dispatch(actionCreators.createOrderItem())
  };
};
export default connect(
  null,
  mapActionsToProps
)(ItemCard);
