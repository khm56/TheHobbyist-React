import React, { Component } from "react";

// Components

import { connect } from "react-redux";

import * as actionCreators from "../store/actions/index";

class ItemDetail extends Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.itemID);
  }
  render() {
    if (!this.props.item.id) {
      return "Potato";
    } else {
      const item = this.props.item;
      return (
        <div className="item">
          <div>
            <h3>{item.name}</h3>
            <img
              src={item.image}
              className="img-thumbnail img-fluid"
              alt={item.name}
            />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    item: state.item.item
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
