import React from 'react';
import { shallow, mount } from 'enzyme';
import CreateForm from './CreateForm';
import ExpenseCategoryModel from "./../expense-category/ExpenseCategoryModel";
import ExpenseModel from "./ExpenseModel";

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

        const wrapper = shallow(<CreateForm />);
        expect(wrapper.state().categories).toHaveLength(1);
    });

    it('Should navigate to expenses after creating new expense', () => {
        const history = { push: jest.fn() };
        const wrapper = shallow(<CreateForm history={history} />);
        const model = ExpenseModel.createInstance();
        model.create = (callback) => {
            callback();
        };
        wrapper.setState({ model });
        wrapper.find('ExpenseForm').getElements()[0].props.handleSubmit({ preventDefault: () => { } });
        expect(history.push).toHaveBeenCalled();
    });

});
