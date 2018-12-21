import React from 'react';
import ExpenseCategoryModel from "./ExpenseCategoryModel";

export default class ExpenseCagegoryFormModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            model: new ExpenseCategoryModel()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label labelFor="Name" className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="Name" placeholder="Name"
                            value={this.state.model.name} onChange={this.handleChange} />
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
