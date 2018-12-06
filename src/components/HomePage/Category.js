import React, { Component } from "react";
import posed from "react-pose";

import VisibilitySensor from "react-visibility-sensor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faMusic } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
const Box = posed.div({
  hidden: {
    opacity: 0,
    x: +10,
    y: +10
  },
  popped: {
    opacity: 1,
    x: -10,
    y: -10,
    background: "#6E2B79",
    transition: { duration: 700 }
  }
});

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      isVisible: false
    };
  }

  componentDidMount() {
    this.setState({
      msg: "Element is now " + (this.state.isVisible ? "visible" : "hidden"),
      isVisible: this.state.isVisible
    });
    console.log(
      "Element is now " + (this.state.isVisible ? "visible" : "hidden")
    );
  }

  onClickHandler(category) {
    let items = this.props.items.filter(item => {
      return item.category === category;
    });

    console.log(items);
    this.props.history.push({
      pathname: "/category",
      state: { items: items }
    });
  }
  render() {
    let onChange = isVisibl => {
      this.setState({
        msg: "Element is now " + (!isVisible ? "visible" : "hidden"),
        isVisible: !this.state.isVisible
      });
      console.log("Element is now " + (!isVisible ? "visible" : "hidden"));
    };
    const { isVisible } = this.state;
    return (
      <div>
        <VisibilitySensor className="container" onChange={onChange}>
          <Box
            className="dot m-4"
            pose={isVisible ? "popped" : "hidden"}
            onClick={() => this.onClickHandler(this.props.category)}
          >
            {" "}
            <FontAwesomeIcon
              className="fa-9x fa-mx-3 my-3  text-white text-center"
              icon={this.props.icon}
            />{" "}
          </Box>
        </VisibilitySensor>
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

export default withRouter(connect(mapStateToProps)(Category));
