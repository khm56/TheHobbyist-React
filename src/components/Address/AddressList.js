import React, { Component } from "react";

import AddressCard from "./AddressCard";

class AddressList extends Component {
  render() {
    const addresses = this.props.addresses.map(address => (
      <AddressCard key={address.id} address={address} />
    ));
    return (
      <div>
        <h2>Address Book</h2>
        <div> {addresses}</div>
      </div>
    );
  }
}

export default AddressList;
