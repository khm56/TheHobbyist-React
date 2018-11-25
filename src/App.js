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
import ItemList from "./components/ItemList";

import ItemDetail from "./components/ItemDetail";

import Cart from "./components/Cart";

// import Garbage from "./Garbage";
// import Treasure from "./Treasure";

class App extends Component {
  componentDidMount() {
    this.props.checkToken();
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <div className="container-fluid">
          <Switch>

            <Route path="/items/:itemID" component={ItemDetail} />

            <Route path="/cart" component={Cart} />

            <Route path="/list" component={ItemList} />
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
  checkToken: () => dispatch(actionCreators.checkForExpiredToken()),
  fetchItems: () => dispatch(actionCreators.fetchItems())
});

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
