import React, { Component } from "react";
import findAncestor from "../utils";

class ToolTipText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false
    };
  }

  addListner = (ev) => {
    const insideModal = findAncestor(ev.target, ".tool-tip-text") != null;
    if (!insideModal) {
      this.hideToolTip();
    }
  };

  showToolTip = (ev) => {
    this.setState({ isDisplayed: true });
    ev.stopPropagation();
    window.addEventListener("click", this.addListner);
  };

  hideToolTip = () => {
    this.setState({ isDisplayed: false });
    window.removeEventListener("click", this.addListner);
  };


  render() {
    let tipClass = "tool-tip-text";
    if (this.state.isDisplayed) {
      tipClass += " show-tool-tip";
    }
    return (
      <div className="tool-tip">
        <button
          className="primary-btn"
          onClick={this.showToolTip}
        >
          {this.props.buttonText}
        </button>
        <div className={`${tipClass}`}>
          {this.props.toolTipText}
        </div>
      </div>
    );
  }
}

export default ToolTipText;
