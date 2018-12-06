import React, { Component } from "react";
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
      <div
        className="card m-3 p-3 text-dark"
        style={{ backgroundColor: "#fff" }}
      >
        <h2 className="text-uppercase m-3 font-weight-light">{address.name}</h2>{" "}
        <hr className="mx-3" />
        <div className=" justify-content-center m-3 font-weight-light">
          <h5 className="row">
            <span class="text-white badge text-uppercase badge-success py-2 mb-2 mx-3 ">
              Governorate
            </span>
            {address.governorate}
            <span class="text-white badge text-uppercase badge-success py-2 mb-2 mx-3 ">
              Area
            </span>
            {address.area}
            <span class="text-white badge text-uppercase badge-success py-2 mb-2 mx-3 ">
              block
            </span>
            {address.block}
          </h5>

          <h5 className="row">
            <span class="text-white badge text-uppercase badge-success py-2 mb-2 mx-3 ">
              Street
            </span>
            {address.street}
            <span class="text-white badge text-uppercase badge-success py-2 mb-2 mx-3 ">
              building
            </span>{" "}
            {address.house_building}
            <span class="text-white badge text-uppercase badge-success py-2 mb-2 mx-3 ">
              Floor
            </span>
            {address.floor}{" "}
            <span class="text-white badge text-uppercase badge-success py-2 mb-2 mx-3 ">
              Appartment
            </span>{" "}
            {address.appartment}
          </h5>

          <h5 className="row">
            {" "}
            <span class="text-white badge text-uppercase badge-success py-2 mb-2 mx-3 ">
              Extra Directions
            </span>{" "}
            {address.extra_directions}
          </h5>
        </div>
        <button
          type="button"
          className="btn btn-dark "
          onClick={() => this.redirectToForm(address)}
        >
          Update
        </button>
      </div>
    );
  }
}

export default withRouter(AddressCard);
