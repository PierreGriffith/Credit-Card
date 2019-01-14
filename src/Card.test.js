import  Card from './Card'
import { mount } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';


configure({ adapter: new Adapter() });


test('testing visa card', () => {

    const wrapper = mount(
        <Card />
    );

    wrapper.find('.card-number').simulate('change', {target: {value: '4'}});
    const result = wrapper.find('.input-card').text();
   expect(result).toBe('visa');


});


test('testing a wrong card', () => {

    const wrapper = mount(
        <Card />
    );

    wrapper.find('.card-number').simulate('change', {target: {value: 'a'}});
    const result = wrapper.find('.input-card').text();
    expect(result).toBe('unregognizable card');


});