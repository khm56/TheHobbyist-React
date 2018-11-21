import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";

// Components
// import PrivateRoute from "./PrivateRoute";
// import Home from "./Home";
// import Navbar from "./Navbar";
import Signup from "./components/signup";
// import Garbage from "./Garbage";
// import Treasure from "./Treasure";
import Login from "./components/login";

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
            <Route path="/" exact component={Login} />
            {/* <Route path="/garbage" component={Garbage} />
            <PrivateRoute path="/treasure" component={Treasure} /> */}
            <Route path="/signup" component={Signup} />
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
