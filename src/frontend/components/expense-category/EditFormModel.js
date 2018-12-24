import React from 'react';
import ExpenseCategoryModel from "./ExpenseCategoryModel";
import FormModel from "./FormModel";
const _ = require('lodash');

export default class EditExpenseCagegoryFormModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: new ExpenseCategoryModel()
        };
        _.bindAll(this, ['handleChange', 'handleSubmit']);
    }

    componentDidMount() {
        const categoryModel = ExpenseCategoryModel.clone({ _id: this.props.match.params.id });
        const that = this;
        categoryModel.getById((model) => {
            that.setState({ model });
        });
    }

    handleChange(event) {
        const model = this.state.model;
        model.name = event.target.value;
        this.setState({ model });
    }

    handleSubmit(event) {
        event.preventDefault();
        const that = this;
        this.state.model.update(() => {
            that.props.history.push('/expenses/categories');
        });
    }

    render() {
        return (
            <div>
                <FormModel handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    model={this.state.model}
                    heading="Edit Category"
                />
            </div>
        );
    }
}
