import React from 'react';
import { shallow } from 'enzyme';
import ExpenseList from './ExpenseList';

describe('<ExpenseListTest />', () => {
    it('Should render all basic elements', () => {
        const wrapper = shallow(<ExpenseList/>);
        expect(wrapper.find('h3.heading').exists()).toBeTruthy();
        expect(wrapper.find('Link').exists()).toBeTruthy();
        expect(wrapper.find('GridModel').exists()).toBeTruthy();
        expect(wrapper.find('Pagination').exists()).toBeTruthy();
        expect(wrapper.find('DeleteModal').exists()).toBeTruthy();
        expect(wrapper.find('ToastContainer').exists()).toBeTruthy();
    });
});
