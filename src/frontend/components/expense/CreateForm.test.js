import React from 'react';
import { shallow, mount } from 'enzyme';
import CreateForm from './CreateForm';
import ExpenseModel from "./ExpenseModel";
import ExpenseCategoryModel from "./../expense-category/ExpenseCategoryModel";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock("./../expense-category/ExpenseCategoryModel");

describe('<CreateFormTest />', () => {
    it('Should render all basic elements', () => {
        const wrapper = shallow(<CreateForm />);
        expect(wrapper.find('ExpenseForm').exists()).toBeTruthy();
    });

    it('Should set description of model', () => {
        const wrapper = mount(<CreateForm />);
        const mockedEvent = {
            target: {
                name: "description",
                value: "This is it"
            }
        }
        wrapper.find('input[name="description"]').simulate('change', mockedEvent);
        expect(wrapper.state().model.description).toEqual('This is it');
    });

    it('Should get all categories on mount', () => {
        ExpenseCategoryModel.mockImplementation(() => {
            return {
                getAll: (callback) => {
                    callback([{ name: 'Random' }]);
                },
            };
        });

        const wrapper = mount(<CreateForm />);
        expect(wrapper.state().categories).toHaveLength(1);
    });
});
