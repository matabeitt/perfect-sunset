import React from 'react';
import SunsetView from './SunsetView';
import {shallow} from 'enzyme';

import {testSunsetViewSuccess} from '../mocks/WeatherData';

describe('<SunsetView/> renders', () => {
    let wrapper;
    
    beforeEach(()=> {wrapper = shallow(<SunsetView {...testSunsetViewSuccess}/>)});

    it ('should be defined', () => {
        expect(wrapper).toBeDefined();
    });

    it ('should have an image', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    })
})