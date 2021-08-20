import React from 'react';
import ExpenseCategoryModel from "./ExpenseCategoryModel";
import FormModel from "./Form";
import AppComponent from '../utility/AppComponent';
import OperationType from '../utility/OperationType';

export default class CreateExpenseCagegoryForm extends AppComponent {
    constructor(props) {
        super(props);
        this.state = {
            model: new ExpenseCategoryModel(),
            validationErrors: {}
        };
    }

    handleChange = (event) => {
        const model = this.state.model;
        model.name = event.target.value;
        this.setState({ model, validationErrors: {} });
    }

    onError(errors) {
        super.notifyError(errors[0].errorMessage);
    }

    onValidationError = (validationErrors) => {
        this.setState({ validationErrors });
    }

    onCreated = (category) => {
        this.props.history.push('/expenses/categories', { model: category, type: OperationType.CREATE() });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.model.create(this.onCreated, this.onValidationError, this.onError);
    }

    render() {
        return (
            <div>
                <FormModel handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    model={this.state.model}
                    heading="Create Category"
                    errors={this.state.validationErrors}
                />
                {this.renderToastContainer()}
            </div>
        );
    }
}
