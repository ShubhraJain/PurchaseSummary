import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToolTipText from './ToolTipText';

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

  totalDiscount = () => {
    return (this.subTotalPrice() * this.props.discount) / 100;
  };

  totalPrice = () => {
    return (
      this.subTotalPrice() +
      this.totalTaxes() -
      this.totalDiscount() -
      this.totalPickUpSavings()
    );
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
              buttonText={'Pickup Savings'}
              toolTipText={
                <p>
                  Picking up your order in the store helps cut costs, and we
                  pass the savings on to you.
                </p>
              }
            />
            <p className="savings align-right">
              -${this.totalPickUpSavings().toFixed(2)}
            </p>
          </div>
          {
            this.props.discount > 0 &&
            <div className="breakdwn">
              <p>Discount</p>
              <p className="align-right">${this.totalDiscount().toFixed(2)}</p>
            </div>
          }
          <div className="breakdwn">
            <p>Est. taxes & fees</p>
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

const mapStateToProps = state => ({
  discount: state.discount
});

export default connect(mapStateToProps)(PricingDetails);
