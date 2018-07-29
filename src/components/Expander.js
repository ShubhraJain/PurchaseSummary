import React from "react";

class Expander extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }

  toggleExpander = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  };

  render = () => {
    let btnContent = this.props.expandedText;
    let expandSign = " -";
    if (!this.state.isExpanded) {
      btnContent = this.props.unExpandedText;
      expandSign = " +";
    }
    return (
      <div className="expander-container">
        <span onClick={this.toggleExpander} className="expand-btn">
          <button className="primary-btn">{btnContent}</button>
          <span>{expandSign}</span>
        </span>
        {this.state.isExpanded && <div className="expander-innercontent">{this.props.innerContent}</div>}
      </div>
    );
  };
}

export default Expander;
