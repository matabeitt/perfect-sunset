import React from 'react';
import Notification from './Notification';

import { shallow } from 'enzyme';

describe('<Notification> renders with requirements:', () => {
    let wrapper;

    let testProps = ({
        label: 'Notification',
        type: 'default',
        description: 'Something has happened, I thought you should know.',
    });
    
    beforeEach(() => { wrapper = shallow(<Notification {...testProps} />) });

    it('should be defined', () => {
        expect(wrapper).toBeDefined();
    });

    it('should render a div', () => {
        expect(wrapper.find('div')).toHaveLength(1);
    })

    it ('should have a label', () => {
        expect(wrapper.find('label')).toHaveLength(1);
    })

    it ('should have a description', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    })

    describe('default render', () => {
        it('should have default class', () => {
            expect(wrapper.first('div').hasClass('default')).toBe(true);
        });
    });

    describe('alert render', () => {

        beforeEach(() => {
            testProps.type = 'alert';
            wrapper = shallow(<Notification {...testProps}/>);
        })

        it('should have alert class', () => {
            expect(wrapper.first('div').hasClass('alert')).toBe(true);
        });
    });
    
    describe('danger render', () => {

        beforeEach(() => {
            testProps.type = 'danger';
            wrapper = shallow(<Notification {...testProps}/>);
        })

        it('should have danger class', () => {
            expect(wrapper.first('div').hasClass('danger')).toBe(true);
        });
    })

    it('should have a close button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });
});

describe('<Notification/> is interactive as expected', () => {
    it ('can be closed', () => {
        expect(true).toBe(false);
    });
});