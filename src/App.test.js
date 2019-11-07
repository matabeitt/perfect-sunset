import React from 'react';
import App from './App';

import {shallow} from 'enzyme';

describe('<Index> renders without crashing:', () => {
	let wrapper;

	beforeEach(() => {wrapper = shallow(<App/>)});

	it('should be defined', () => {
		expect(wrapper).toBeDefined();
	});

	it('should contain a form', () => {
		expect(wrapper).toBeFalsy();
	});

	it('should contain a view', () => {
		expect(wrapper).toBeFalsy();
	});
});