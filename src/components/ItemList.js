import React, { Component } from "react";

class ItemList extends Component {
  renderPricing() {
    if (this.props.pickUpAvailable) {
      const priceAfterPickUpSavings =
        this.props.price - this.props.pickUpSavings;
      return (
        <div className="item-details">
          <p className="item-title">{this.props.title}</p>
          <p className="final-price">${priceAfterPickUpSavings}</p>
          <p className="quantity">Qty:</p>
          <p className="original-price">${this.props.price}</p>
        </div>
      );
    } else {
      return (
        <div className="item-details">
          <p className="item-title">{this.props.title}</p>
          <p className="final-price">${this.props.price}</p>
          <p className="quantity">Qty:</p>
        </div>
      );
    }
  }
  render() {
    return (
      <li className="item-list">
        <img
          className="item-img"
          src={`${this.props.image}`}
          alt={`${this.props.title}`}
        />
        {this.renderPricing()}
      </li>
    );
  }
}

export default ItemList;

// <div className="item-details">
//   <p>{this.props.title}</p>
// {this.renderPricing()}
// </div>
