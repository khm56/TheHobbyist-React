import React, { Component } from "react";

class AddressCard extends Component {
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
        </div>
      </div>
    );
  }
}

export default AddressCard;
