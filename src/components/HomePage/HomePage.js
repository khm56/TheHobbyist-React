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

  render() {
    let number = 4;
    let randomItems = this.props.items.map(item => {
      if (number > 0) {
        number--;
        return <ItemCard key={item.id} item={item} />;
      }
    });
    return (
      <div className="my-auto mx-auto">
        <h1 className=" font-weight-light text-center text-white text-uppercase p-5 mt-2 title">
          {" "}
          The place to unleash your creativity!
        </h1>{" "}
        <Carousel />
        <div className=" text-center row">
          <div className="col">
            <div>
              <div className=" text-center row">
                <div className="col">
                  <h1 className=" bg-dark p-5" />{" "}
                  <h1 className="text-light p-3">CATEGORIES </h1>
                  <div className="container">
                    <div className="row justify-content-center">
                      <Category icon={faMusic} category="M" />

                      <Category icon={faBook} category="B" />
                      <Category icon={faLaptop} category="T" />
                      <Category icon={faPaintBrush} category="A" />
                      <Category icon={faFutbol} category="S" />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-light p-3">FEATURED PRODUCTS</h1>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="row">{randomItems}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row justify-content-center" />
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
