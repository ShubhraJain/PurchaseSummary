import React, { Component } from "react";

class Promo extends Component {
  render() {
    return (
      <div className="promo-details">
        <label htmlFor="promo-input">Promo Code</label>
        <input type="text" id="promo-input" />
        <button>Apply</button>
      </div>
    );
  }
}

export default Promo;
