import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';

describe('<DashboardTest />', () => {
    it('Should render all basic elements', () => {
        const wrapper = shallow(<Dashboard />);
        
        expect(wrapper.find('Card[linkTitle="Expenses"]').exists()).toBeTruthy();
        expect(wrapper.find('Card[linkUrl="/expenses"]').exists()).toBeTruthy();

        expect(wrapper.find('Card[linkTitle="Expenses categories"]').exists()).toBeTruthy();
        expect(wrapper.find('Card[linkUrl="/expenses/categories"]').exists()).toBeTruthy();

        expect(wrapper.find('Card[linkTitle="Expenses report"]').exists()).toBeTruthy();
        expect(wrapper.find('Card[linkUrl="/expenses/reports/summary"]').exists()).toBeTruthy();
    });
});
