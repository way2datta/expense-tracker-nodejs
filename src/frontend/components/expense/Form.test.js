import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';
import ExpenseModel from "./ExpenseModel";

describe('<FormTest />', () => {
    const model = new ExpenseModel({ description: "This is a description." });
    const categories = [{ _id: 1, name: 'Random category' }];

    it('Should render all basic elements', () => {
        const wrapper = shallow(<Form heading="Random heading"
            categories={categories}
            model={model}
        />);

        expect(wrapper.find('h3.heading').text()).toEqual("Random heading");
        expect(wrapper.find('select[name="category"]').exists()).toBeTruthy();
        expect(wrapper.find('input[name="description"]').exists()).toBeTruthy();
        expect(wrapper.find('input[name="amount"]').exists()).toBeTruthy();
        expect(wrapper.find('input[name="incurredAt"]').exists()).toBeTruthy();
        expect(wrapper.find('input[value="Save"]').exists()).toBeTruthy();
    });
});
