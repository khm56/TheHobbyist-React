import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// Components

import { connect } from "react-redux";

import * as actionCreators from "../store/actions/index";
import QuantityForm from "./QuantityForm";
class ItemDetail extends Component {
  componentDidMount() {
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
            <QuantityForm cart={this.props.cart.id} item={item} />
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
    getItem: itemID => dispatch(actionCreators.fetchItemDetail(itemID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetail);
