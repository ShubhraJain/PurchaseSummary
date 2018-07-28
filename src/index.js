import React from "react";
import ReactDOM from "react-dom";
import data from "./data/products.json";
import PurchaseSummary from "./components/PurchaseSummary";
import "./styles.css";

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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
