import React, { Component } from 'react';
import Expander from './Expander';
import PricingDetails from './PricingDetails';
import ItemDetails from './ItemDetails';
import Promo from './Promo';

class PurchaseSummary extends Component {
  renderDetailsComponent = () => {
    return <ItemDetails products={this.props.products} />;
  };

  renderPromoComponent = () => {
    return <Promo />;
  };

  render() {
    return (
      <div className="purchase-summary">
        <PricingDetails products={this.props.products} />
        <Expander
          unExpandedText={'See items details'}
          expandedText={'Hide items details'}
          innerContent={this.renderDetailsComponent()}
        />
        <hr />
        <Expander
          unExpandedText={'Apply promo code'}
          expandedText={'Hide promo code'}
          innerContent={this.renderPromoComponent()}
        />
      </div>
    );
  }
}

export default PurchaseSummary;
