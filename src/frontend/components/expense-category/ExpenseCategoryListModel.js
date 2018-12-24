import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseCategoryModel from "./ExpenseCategoryModel";
import GridModel from '../GridModel';
const _ = require('lodash');

export default class ExpenseCategoryListModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            model: new ExpenseCategoryModel()
        };

        _.bindAll(this, ['renderGridActions', 'getAll', 'delete']);
    }

    renderGridActions(model) {
        return <div className="text-right">
            <a className="btn btn-primary text-light btn-sm margin-right-20"
                onClick={e => this.edit(e, model)}>Edit</a>
            <a className="btn btn-danger text-light btn-sm"
                onClick={e => this.delete(e, model)}>Delete</a>
        </div>
    }

    componentDidMount() {
        this.getAll();
    }

    delete(event, model) {
        const categoryModel = ExpenseCategoryModel.clone(model);
        const that = this;
        categoryModel.delete(() => {
            var filtered = this.state.categories.filter(function (category) {
                return category._id != categoryModel.id;
            });
            that.setState({ categories: filtered });
        });
    }

    edit(event, model) {
        this.props.history.push('/expenses/categories/edit/' + model._id);
    }

    getAll() {
        this.state.model.getAll((categories) => {
            this.setState({ categories });
        });
    }

    render() {
        const headers = ['Name', ''];
        const headerCssClasses = ['', ''];
        const attributes = ['name', this.renderGridActions];
        const columnCssClasses = ['', ''];
        return (
            <div>
                <h3 className="heading">Expenses Categories</h3>
                <div className="margin-top-10 margin-bottom-20">
                    <Link to="/expenses/categories/new" className="btn btn-primary">New</Link>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <GridModel
                            attributes={attributes}
                            datasource={this.state.categories}
                            headers={headers}
                            headerCssClasses={headerCssClasses}
                            columnCssClasses={columnCssClasses}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
