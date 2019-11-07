import React from 'react';
import WeatherChart from './WeatherChart';

import { shallow } from 'enzyme';
import { testData } from '../mocks/WeatherData';

describe('<WeatherChart/> renders appropriately', () => {
    let wrapper;
    
    beforeEach(() => { wrapper = shallow(<WeatherChart {...testData} />)});

    it('renders without crashing', () => {
        expect(wrapper).toBeDefined();
    });

    describe('with valid data', () => {
        it('uses a table format', () => {
            expect(wrapper.find('table')).toHaveLength(1);
            expect(wrapper.find('thead')).toHaveLength(1);
            expect(wrapper.find('tbody')).toHaveLength(1);
        });
    
        it('shows correct amount of data', () => {
            expect(wrapper.find('tbody').children()).toHaveLength(5);
        });
    });

    describe('with invalid data', () => {
        if ('should not exist', () => {
            expect(wrapper).toBeUndefined();
        });
    });
    
})