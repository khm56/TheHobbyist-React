import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faMusic,
  faLaptop,
  faPaintBrush,
  faFutbol
} from "@fortawesome/free-solid-svg-icons";

// Components
import Carousel from "./Carousel.js";
import Category from "./Category.js";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";
import ItemCard from "../ItemCard";

class HomePage extends Component {
  componentDidMount() {}
  Randomizer(category) {
    let item = this.props.items.find(item => {
      return item.id === category;
    });
    console.log(item);
    return item;
  }
  render() {
    console.log(this.props.items);
    let item1 = () => {
      this.Randomizer(1);
    };
    let item2 = () => {
      this.Randomizer(2);
    };
    let item3 = () => {
      this.Randomizer(3);
    };
    let item4 = () => {
      this.Randomizer(4);
    };
    let item5 = () => {
      this.Randomizer(5);
    };
    return (
      <div className="my-auto mx-auto">
        <Carousel />
        <div className=" text-center row">
          <div className="col">
            <h1 className="text-dark p-3">Categories </h1>
            <div className="container">
              <div className="row justify-content-center">
                <Category icon={faMusic} category="M" />

                <Category icon={faBook} category="B" />
                <Category icon={faLaptop} category="T" />
              </div>

              <div className="row justify-content-center">
                <Category icon={faPaintBrush} category="A" />
                <Category icon={faFutbol} category="S" />
              </div>
            </div>

            <div className=" text-center row">
              <div className="col">
                <h1 className="text-dark p-3">Featured Products</h1>
                <div className="container">
                  <div className="row justify-content-center">
                    <ItemCard item={item1} />
                    <ItemCard item={item2} />
                    <ItemCard item={item3} />
                    <ItemCard item={item4} />
                    <ItemCard item={item5} />
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center">
                <h1>Hello</h1>
              </div>
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(HomePage);
