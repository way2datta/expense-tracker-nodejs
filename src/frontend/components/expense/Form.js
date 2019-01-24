import React from 'react';
import PropTypes from 'prop-types';

export default class ExpenseForm extends React.Component {
    render() {
        let categories = this.props.categories;
        let optionItems = categories.map((category) =>
            <option key={category.name} value={category._id}>{category.name}</option>
        );

        return (
            <div>
                <h3 className="heading">{this.props.heading}</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="CategoryId" className="col-sm-2 col-form-label">Category:</label>
                        <div className="col-sm-4">
                            <select
                                name="categoryId"
                                className="form-control"
                                onChange={this.props.handleChange} >
                                {optionItems}
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Description" className="col-sm-2 col-form-label">Description:</label>
                        <div className="col-sm-4">
                            <input name="description"
                                type="text" className="form-control" id="Description"
                                placeholder="Description" value={this.props.model.description}
                                onChange={this.props.handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="Amount" className="col-sm-2 col-form-label">Amount:</label>
                        <div className="col-sm-4">
                            <input name="amount" type="text" className="form-control" id="Amount"
                                placeholder="Amount" value={this.props.model.amount}
                                onChange={this.props.handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="IncurredAt" className="col-sm-2 col-form-label">IncurredAt:</label>
                        <div className="col-sm-4">
                            <input name="incurredAt" type="text" className="form-control" id="IncurredAt"
                                placeholder="IncurredAt" value={this.props.model.incurredAt}
                                onChange={this.props.handleChange} />
                        </div>
                    </div>

                    <input type="submit" value="Save" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

ExpenseForm.propTypes = {
    heading: PropTypes.string,
    handleSubmit: PropTypes.func,
    model: PropTypes.object,
    handleChange: PropTypes.func,
};