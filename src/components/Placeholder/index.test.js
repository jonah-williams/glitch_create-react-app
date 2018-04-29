/* global it describe expect jest*/

import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Placeholder from './index';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    animating: true,
    toggleAnimation: jest.fn()
  }

  const enzymeWrapper = mount(<Placeholder {...props} />)

  return {
    props,
    enzymeWrapper
  }
}
                              
describe('Placeholder', () => {
  it('renders the component', () => {
    const { enzymeWrapper } = setup()
    expect(enzymeWrapper.find('.Placeholder-logo').hasClass('animating')).toBe(true)
    
    const todoInputProps = enzymeWrapper.find('Placeholder').props()
    expect(todoInputProps.animating).toBe(true)
  });

  it('calls the toggleAnimation function', () => {
    const { enzymeWrapper, props } = setup()
    const button = enzymeWrapper.find('button')
    button.simulate('click')
    expect(props.toggleAnimation.mock.calls.length).toBe(1)
    expect(props.toggleAnimation.mock.calls[0][0]).toBe(false)
  })
});
