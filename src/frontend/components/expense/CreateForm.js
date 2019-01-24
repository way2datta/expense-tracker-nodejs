import React from 'react';
import ExpenseModel from "./ExpenseModel";
import ExpenseCategoryModel from "./../expense-category/ExpenseCategoryModel";
import Form from "./Form";
import { formatCalenderDate } from '../../helpers/formatDate';

const _ = require('lodash');

export default class CreateExpenseFormModel extends React.Component {
    constructor(props) {
        super(props);
        const model = new ExpenseModel();
        model.incurredAt = formatCalenderDate(new Date());

        this.state = {
            model,
            categories: []
        };
        _.bindAll(this, ['handleChange', 'handleSubmit']);
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        var categoryModel = new ExpenseCategoryModel();
        categoryModel.getAll((categories) => {
            this.setState({ categories });
        });
    }

    handleChange(event) {
        const model = this.state.model;
        model[event.target.name] = event.target.value;
        this.setState({ model });
    }

    handleSubmit(event) {
        event.preventDefault();
        const that = this;
        this.state.model.create(() => {
            that.props.history.push('/expenses');
        });
    }

    render() {
        return (
            <div>
                <Form handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    model={this.state.model}
                    heading="Create Expense"
                    categories={this.state.categories}
                />
            </div>
        );
    }
}
