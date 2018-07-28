import React, { Component } from "react";

class ToolTipText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false
    };
  }

  addListner = (ev) => {
    console.log("event listner called", ev.target);
    const modal = document.getElementsByClassName("tool-tip-text")[0];
    if (ev.target !== modal) {
      this.hideToolTip();
    }
  };

  showToolTip = (ev) => {
    console.log('show tool tip');
    this.setState({ isDisplayed: true });
    ev.stopPropagation();
    window.addEventListener("click", this.addListner);
  };

  hideToolTip = () => {
    console.log('hide tooltip');
    this.setState({ isDisplayed: false });
    window.removeEventListener("click", this.addListner);
  };


  render() {
    let tipClass = "tool-tip-modal";
    if (this.state.isDisplayed) {
      tipClass += " show-tool-tip";
    }
    return (
      <div className="tool-tip">
        <button
          className="primary-btn"
          onClick={this.showToolTip}
          // onBlur={this.handleBlur}
        >
          {this.props.text}
        </button>
        <div className={`${tipClass}`}>
          <div className="tool-tip-text">
            {this.props.toolTipText}
          </div>
        </div>
      </div>
    );
  }
}

export default ToolTipText;
