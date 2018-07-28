import React, { Component } from "react";

class ToolTipText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false
    };
  }
  handleOutsideClick = ev => {
    console.log("handleOutsideClick");
    const modal = document.getElementsByClassName("tool-tip-text")[0];
    if (ev.target === modal) {
      console.log(this);
      this.hideToolTip();
    }
  };

  componentDidMount = () => {
    console.log("component did mount");
    window.addEventListener("click", this.handleOutsideClick);
    // this.handleOutsideClick();
  };

  toggleToolTip = () => {
    console.log("changing display state");
    this.setState(prevState => ({
      isDisplayed: !prevState.isDisplayed
    }));
  };

  showToolTip = () => {
    this.setState({ isDisplayed: true });
  };
  hideToolTip = () => {
    this.setState({ isDisplayed: false });
  };

  handleBlur = e => {
    console.log("Blur", e.target);
    this.hideToolTip();
  };
  handleToolTipFocus = e => {
    console.log("Focus", e.target);
    this.showToolTip();
  };

  handleOutsideClick = () => {};

  render() {
    let tipClass = "tool-tip-text";
    if (this.state.isDisplayed) {
      tipClass += " show-tool-tip";
    }
    return (
      <div className="tool-tip">
        <button
          className="primary-btn"
          onClick={this.toggleToolTip}
          // onBlur={this.handleBlur}
        >
          Pickup savings
        </button>
        <div className={`${tipClass}`}>{this.props.toolTipText}</div>
      </div>
    );
  }
}

export default ToolTipText;
