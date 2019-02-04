import React from 'react';
import PropTypes from 'prop-types';

export default class ExpenseCagegoryForm extends React.Component {
    renderError(key) {
        const containsError = this.props.errors &&
            this.props.errors[key] !== undefined;
        if (containsError) {
            const errorMessage = this.props.errors[key][0];
            return <span className="text-danger"> {errorMessage} </span>;
        }
    }

    render() {
        return (
            <div>
                <h3 className="heading">{this.props.heading}</h3>
                <form onSubmit={this.props.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="Name" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-4">
                            <input type="text" className="form-control" id="Name" placeholder="Name"
                                value={this.props.model.name} onChange={this.props.handleChange} />
                            {this.renderError(`name`)}
                        </div>
                    </div>
                    <input type="submit" value="Save" className="btn btn-primary" />
                </form>
            </div>
        );
    }
}

ExpenseCagegoryForm.propTypes = {
    heading: PropTypes.string,
    handleSubmit: PropTypes.func,
    model: PropTypes.object,
    handleChange: PropTypes.func,
    errors: PropTypes.array
};