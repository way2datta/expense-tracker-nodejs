import React from 'react';
import ExpenseModel from "./ExpenseModel";
import Form from "./Form";
const _ = require('lodash');

export default class CreateExpenseFormModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: new ExpenseModel()
        };
        _.bindAll(this, ['handleChange', 'handleSubmit']);
    }

    handleChange(event) {
        const model = this.state.model;
        model.name = event.target.value;
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
                />  
            </div>
        );
    }
}
