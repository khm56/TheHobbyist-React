import React, { Component } from "react";
import UpdateAddressForm from "./UpdateAddressForm";
import { Redirect, withRouter } from "react-router-dom";

class AddressCard extends Component {
  constuctor() {
    this.redirectToForm = this.redirectToForm.bind(this);
  }
  redirectToForm(address) {
    this.props.history.push({
      pathname: "/updateAddress",
      state: { address: address }
    });
  }
  render() {
    const address = this.props.address;

    return (
      <div className="card">
        <h2>{address.name}</h2>
        <div>
          <h2>Governorate : {address.governorate}</h2>
          <h3>
            Area : {address.area} block : {address.block}
          </h3>
          <h3>
            Street : {address.street} house/building : {address.house_building}
          </h3>
          <h3>
            Floor : {address.floor} Appartment : {address.appartment}
          </h3>
          <h3>Extra Directions : {address.extra_directions}</h3>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => this.redirectToForm(address)}
          >
            Update
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(AddressCard);
