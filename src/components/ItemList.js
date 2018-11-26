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
        <Link to="/profile"> Profile</Link>
        <h3>Items</h3>
        <div className="row">{itemCards}</div>
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
