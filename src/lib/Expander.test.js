import React from 'react';
import Expander from '../components/Expander';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mount } from 'enzyme';
import { expect } from 'chai';

Enzyme.configure({ adapter: new Adapter() });

describe('Expander', () => {
  let props;
  let mountedExpander;
  const expander = () => {
    if (!mountedExpander) {
      mountedExpander = mount(<Expander {...props} />);
    }
    return mountedExpander;
  };

  it('always renders a div', () => {
    const divs = expander().find('div');
    expect(divs.length).to.be.above(0);
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Expander bar="baz" />);
    expect(wrapper.props().bar).to.equal('baz');
    wrapper.setProps({ bar: 'Expander' });
    expect(wrapper.props().bar).to.equal('Expander');
  });

  it('simulates click events', () => {
    const wrapper = mount(<Expander />);
    expect(wrapper.find('div.expander-innercontent')).to.have.length(0);

    wrapper.find('span.expand-btn').simulate('click');
    expect(wrapper.find('div.expander-innercontent')).to.have.length(1);
  });



});