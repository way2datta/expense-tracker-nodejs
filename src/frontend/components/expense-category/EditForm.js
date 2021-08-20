import React from 'react';
import ExpenseCategoryModel from "./ExpenseCategoryModel";
import Form from "./Form";
import AppComponent from '../utility/AppComponent';
import OperationType from '../utility/OperationType';

export default class EditExpenseCagegoryForm extends AppComponent {
    constructor(props) {
        super(props);
        this.state = {
            model: new ExpenseCategoryModel()
        };
    }

    componentDidMount() {
        const categoryModel = ExpenseCategoryModel.clone({ _id: this.props.match.params.id });
        const that = this;
        categoryModel.getById((model) => {
            that.setState({ model });
        });
    }

    handleChange = (event) => {
        const model = this.state.model;
        model.name = event.target.value;
        this.setState({ model });
    }

    onError(errors) {
        super.notifyError(errors[0].errorMessage);
    }

    onValidationError = (validationErrors) => {
        this.setState({ validationErrors });
    }

    onUpdated = (category) => {
        this.props.history.push('/expenses/categories', { model: category, type: OperationType.UPDATE() });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.model.update(this.onUpdated, this.onValidationError, this.onError);
    }

    render() {
        return (
            <div>
                <Form handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    model={this.state.model}
                    heading="Edit Category"
                    errors={this.state.validationErrors}
                />
                {this.renderToastContainer()}
            </div>
        );
    }
}
