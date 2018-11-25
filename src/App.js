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
import Profile from "./components/Profile";
import ItemDetail from "./components/ItemDetail";

import Cart from "./components/Cart";

// import Garbage from "./Garbage";
// import Treasure from "./Treasure";

class App extends Component {
  componentDidMount() {
    this.props.checkToken();
    this.props.fetchItems();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.props.fetchProfile(this.props.user.user_id);
    }
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
            <Route path="/profile" component={Profile} />
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
  fetchProfile: user_id => dispatch(actionCreators.fetchProfile(user_id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
