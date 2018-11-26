import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemCard extends Component {
  render() {
    const item = this.props.item;
    console.log(item);
    return (
      <div className="col-lg-4 col-md-6 col-12">
        <Link to={`/items/${item.id}`} className="card">
          <div className="image">
            <img
              className="card-img-top img-fluid"
              src={item.image}
              alt={item.name}
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              <span>{item.name}</span>
              <span>{item.price} KD</span>
            </h5>
            <small className="card-text">{item.description}</small>
          </div>
        </Link>
      </div>
    );
  }
}

export default ItemCard;
