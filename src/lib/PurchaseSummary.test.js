import React from 'react';
import { Provider } from 'react-redux';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import PurchaseSummary from '../components/PurchaseSummary';
import Expander from '../components/Expander';
import store from "../redux/store";
import data from "../data/products.json";



Enzyme.configure({ adapter: new Adapter() });

describe('<PurchaseSummary />', () => {
  it('renders 2 Expander components', () => {
    const wrapper = shallow(<PurchaseSummary />);
    expect(wrapper.find(Expander)).to.have.length(2);
  });

  it('renders an `.purchase-summary`', () => {
    const wrapper = shallow(<PurchaseSummary />);
    expect(wrapper.find('.purchase-summary')).to.have.length(1);
  });

  it('applies discount', () => {
    const providedPurchaseSummary = (
      <Provider store={store}><PurchaseSummary products={data.products}/></Provider>
    );
    const wrapper = mount(providedPurchaseSummary);
    let h3 = wrapper.find('.price-details .breakdwn h3').at(1);
    expect(h3.text()).to.equal("$119.29");
    
    const promoWrapper = wrapper.find('span.expand-btn').at(1);
    promoWrapper.simulate('click');
    wrapper.find('input').simulate('change', { target: { value: 'discount' } });
    wrapper.find('.promo-details button').simulate('click');
    expect(h3.text()).to.equal("$108.10");
  });
});


