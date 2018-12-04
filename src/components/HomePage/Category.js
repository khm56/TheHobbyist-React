import React, { Component } from "react";
import posed from "react-pose";

import VisibilitySensor from "react-visibility-sensor";

const Box = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "",
      isVisibl: false
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 1000);
  }

  render() {
    let onChange = isVisibl => {
      this.setState({
        msg: "Element is now " + (isVisibl ? "visible" : "hidden")
      });
      console.log("Element is now " + (isVisibl ? "visible" : "hidden"));
    };
    const { isVisible } = this.state;
    return (
      <div>
        <VisibilitySensor onChange={onChange}>
          <Box className="box" pose={isVisible ? "visible" : "hidden"} />
        </VisibilitySensor>
      </div>
    );
  }
}
export default Category;
