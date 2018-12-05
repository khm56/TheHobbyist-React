import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-solid-svg-icons";

// Components
import ItemCard from "./ItemCard";

import { connect } from "react-redux";

import * as actionCreators from "../store/actions";

class CategoryList extends Component {
  render() {
    const itemCards = this.props.items.map(item => (
      <ItemCard key={item.name} item={item} />
    ));

    return (
      <div className="my-auto mx-auto">
        <h3 className="black-title">Category</h3>
        <div className="row mx-5">{itemCards}</div>
      </div>
    );
  }
}

export default CategoryList;
