import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

// Components
import ItemCard from "./ItemCard";

import { connect } from "react-redux";

import * as actionCreators from "../store/actions";

class ItemList extends Component {
  componentDidUpdate(prevProps) {}
  render() {
    const itemCards = this.props.items.map(item => (
      <ItemCard key={item.name} item={item} />
    ));

    return (
      <div className="mt-5">
        <h3 className="">
          Items
          {/* <FontAwesomeIcon className="font-awesome" icon={faGithub} /> */}
        </h3>
        <div className="row">{itemCards}</div>
        <Link to="/profile"> Profile</Link>
        <Link to="/cart"> Cart</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.items,
    profile: state.auth.profile
  };
};
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps)(ItemList);
