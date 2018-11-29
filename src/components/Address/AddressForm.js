import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../../store/actions";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      governorate: "",
      area: "",
      block: 0,
      street: "",
      house_building: "",
      floor: 0,
      appartment: "",
      extra_directions: "",
      default: false
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.addAddress(this.state);

    this.setState({
      name: "",
      governorate: "",
      area: "",
      block: 0,
      street: "",
      house_building: "",
      floor: 0,
      appartment: "",
      extra_directions: "",
      default: false
    });
  }

  render() {
    if (!this.props.user) {
      return <Redirect to="/list" />;
    } else {
      return (
        <div className="card col-6 mx-auto p-0 mt-5">
          <div className="card-body">
            <form onSubmit={this.submitHandler} noValidate>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  value={this.state.name}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <select
                  name="governorate"
                  value={this.state.governorate}
                  onChange={this.changeHandler}
                >
                  <option name="governorate" value={"A"}>
                    Al Asimah Governorate
                  </option>
                  <option name="governorate" value={"H"}>
                    Hawalli Governorate
                  </option>
                  <option name="governorate" value={"F"}>
                    Farwaniya Governorate
                  </option>
                  <option name="governorate" value={"M"}>
                    Mubarak Al-Kabeer Governorate
                  </option>
                  <option name="governorate" value={"AH"}>
                    Ahmadi Governorate
                  </option>
                  <option name="governorate" value={"J"}>
                    Jahra Governorate
                  </option>
                </select>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Area"
                  name="area"
                  required
                  value={this.state.area}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  pattern="[0-9]*"
                  placeholder="Block"
                  name="block"
                  required
                  value={this.state.block}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Street"
                  name="street"
                  required
                  value={this.state.street}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="House/Building"
                  name="house_building"
                  required
                  value={this.state.house_building}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Floor"
                  name="floor"
                  required
                  value={this.state.floor}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Appartment"
                  name="appartment"
                  required
                  value={this.state.appartment}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Extra Directions"
                  name="extra_directions"
                  required
                  value={this.state.extra_directions}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <input
                  name="default"
                  type="checkbox"
                  checked={this.state.default}
                  onChange={this.changeHandler}
                />
              </div>
              <input className="btn btn-primary" type="submit" value="Add" />
            </form>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getItem: itemID => dispatch(actionCreators.fetchItemDetail(itemID)),
    addAddress: address => dispatch(actionCreators.createAddress(address))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressForm);
