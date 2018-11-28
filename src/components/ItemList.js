import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

// Components
import ItemCard from "./ItemCard";

import { connect } from "react-redux";

class ItemList extends Component {
  render() {
    const itemCards = this.props.items.map(item => (
      <ItemCard key={item.name} item={item} />
    ));

    return (
      <div className="Items">
        <h3>Items</h3>
        <div className="row">{itemCards}</div>
        <Link to="/profile"> Profile</Link>
        <Link to="/cart"> Cart</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items
  };
};

export default connect(mapStateToProps)(ItemList);
