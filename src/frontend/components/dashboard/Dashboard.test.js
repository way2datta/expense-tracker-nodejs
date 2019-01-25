import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
