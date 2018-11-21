import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";

// Components
// import PrivateRoute from "./PrivateRoute";
// import Home from "./Home";
// import Navbar from "./Navbar";
import RegisterOrLogin from "./components/RegisterOrLogin";
// import Garbage from "./Garbage";
// import Treasure from "./Treasure";

class App extends Component {
  componentDidMount() {
    this.props.checkToken();
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="container-fluid">
          <Switch>
            <Route path="/(login|signup)" component={RegisterOrLogin} />
            {/* <Route path="/garbage" component={Garbage} />
            <PrivateRoute path="/treasure" component={Treasure} /> */}
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkToken: () => dispatch(actionCreators.checkForExpiredToken())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
