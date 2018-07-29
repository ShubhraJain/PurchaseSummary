import React from 'react';
import { connect } from 'react-redux';
import { PromoActions } from '../redux/actions/promoActions';

class Promo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      discountCode: ''
    };
  }

  clickHandler = () => {
    this.props.addDiscount(this.state.discountCode);
  };

  handleInputChange = (ev) => {
    this.setState(
      { discountCode: ev.target.value }
    );
  }

  render = () => {
    return (
      <div className="promo-details">
        <label htmlFor="promo-input">Promo Code</label>
        <input type="text" id="promo-input" value={this.state.discountCode} onChange={this.handleInputChange}/>
        <button onClick={this.clickHandler}>Apply</button>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addDiscount: code => dispatch(PromoActions.addDiscount(code))
  };
};

export default connect(
  null, // mapStateToProps
  mapDispatchToProps
)(Promo);
