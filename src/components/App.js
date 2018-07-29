import React from "react";
// import ReactDOM from "react-dom";
import data from "../data/products.json";
import PurchaseSummary from "./PurchaseSummary";
import "../styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: data.products
    };
  }
  render = () => {
    return (
      <div className="App">
        <PurchaseSummary products={this.state.products} />
      </div>
    );
  };
}

export default App;
