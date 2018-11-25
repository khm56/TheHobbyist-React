//Temporary file for testing but we will need to make a table with rows
//to display items added to the cart
import React, { Component } from "react";

// Components
import ItemCard from "./ItemCard";

import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const itemCards = this.props.items.map(item => (
      <ItemCard key={item.name} item={item} />
    ));

    return (
      <div className="Items">
        <h3>CartItems</h3>
        <div className="row">{itemCards}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.cart.cartItems
  };
};

export default connect(mapStateToProps)(Cart);
