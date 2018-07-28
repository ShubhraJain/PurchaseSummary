import React, { Component } from "react";
import ItemList from "./ItemList";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
  }

  renderItems = () => {
    return (
      <ul className="details-container">
        {this.props.products.map(product => {
          return (
            <ItemList
              key={product.sku}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
              pickUpAvailable={product.pickUpAvailable}
              pickUpSavings={product.pickUpSavings}
            />
          );
        })}
      </ul>
    );
  };
  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default ItemDetails;
