import React, { Component } from "react";

import AddressCard from "./AddressCard";

class AddressList extends Component {
  render() {
    const addresses = this.props.addresses.map(address => (
      <AddressCard key={address.id} address={address} />
    ));
    return (
      <div>
        <div> {addresses}</div>
      </div>
    );
  }
}

export default AddressList;
