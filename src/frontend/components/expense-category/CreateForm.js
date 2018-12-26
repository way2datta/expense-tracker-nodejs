import React from 'react';
import ExpenseCategoryModel from "./ExpenseCategoryModel";
import FormModel from "./Form";
const _ = require('lodash');

export default class CreateExpenseCagegoryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: new ExpenseCategoryModel()
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
            that.props.history.push('/expenses/categories');
        });
    }

    render() {
        return (
            <div>
                <FormModel handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    model={this.state.model}
                    heading="Create Category"
                />
            </div>
        );
    }
}
