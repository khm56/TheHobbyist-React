import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "./store/actions";

// Components
// import PrivateRoute from "./PrivateRoute";
// import Home from "./Home";
import NavBar from "./components/Navigation/NavBar";
import RegisterOrLogin from "./components/RegisterOrLogin";
import ItemList from "./components/ItemList";
import Profile from "./components/Profile";
import ItemDetail from "./components/ItemDetail";
import Checkout from "./components/Checkout/checkout";

import Cart from "./components/Cart/Cart";

// import Garbage from "./Garbage";
// import Treasure from "./Treasure";

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  componentDidUpdate(prevProps) {
    if (this.props.profile !== prevProps.profile) {
      this.props.setCart(this.props.profile);
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <Switch>
            <Route path="/list" exact component={ItemList} />
            <Route path="/items/:itemID" exact component={ItemDetail} />
            <Route path="/cart" component={Cart} />
            <Route path="/(login|signup)" component={RegisterOrLogin} />
            <Route path="/profile" component={Profile} />
            <Route path="/checkout" component={Checkout} />
            {/* <Route path="/garbage" component={Garbage} />
            <PrivateRoute path="/treasure" component={Treasure} /> */}
            // <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.prof.profile
});

const mapDispatchToProps = dispatch => ({
  checkToken: () => dispatch(actionCreators.checkForExpiredToken()),
  fetchItems: () => dispatch(actionCreators.fetchItems()),
  fetchProfile: user_id => dispatch(actionCreators.fetchProfile(user_id)),
  setCart: orderList => dispatch(actionCreators.setCart(orderList))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
