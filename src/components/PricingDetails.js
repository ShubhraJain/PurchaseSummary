import React, { Component } from "react";
import ToolTipText from "./ToolTipText";

class PricingDetails extends Component {
  subTotalPrice = () => {
    return this.props.products.reduce((a, b) => {
      return a.price + b.price;
    });
  };

  totalPickUpSavings = () => {
    return this.props.products.reduce((a, b) => {
      return a.pickUpSavings + b.pickUpSavings;
    });
  };

  totalTaxes = () => {
    return this.subTotalPrice() / 10;
  };

  totalPrice = () => {
    return this.subTotalPrice() + this.totalTaxes() - this.totalPickUpSavings();
  };

  render() {
    return (
      <div className="price-details">
        <div className="all-prices">
          <div className="breakdwn">
            <p>Subtotal</p>
            <p className="align-right">${this.subTotalPrice().toFixed(2)}</p>
          </div>
          <div className="breakdwn">
            <ToolTipText
              buttonText={"Pickup Savings"}
              toolTipText={
                <p>Picking up your order in the store helps cut costs, and we pass the savings on to you.</p>
              }
            />
            <p className="savings align-right">
              -${this.totalPickUpSavings().toFixed(2)}
            </p>
          </div>
          <div className="breakdwn">
            {/* <p>Est. taxes & fees</p> */}
            <ToolTipText
              buttonText={"Est. taxes & fees"}
              toolTipText={<p>asdfasdf asdfasdf asdfsadf</p>}
            />
            <p className="align-right">${this.totalTaxes().toFixed(2)}</p>
          </div>
        </div>
        <hr />
        <div className="breakdwn">
          <h3>Est. total</h3>
          <h3 className="align-right">${this.totalPrice().toFixed(2)}</h3>
        </div>
      </div>
    );
  }
}

export default PricingDetails;
