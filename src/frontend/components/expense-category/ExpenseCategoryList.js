import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseCategoryModel from "./ExpenseCategoryModel";
import AppComponent from "./../utility/AppComponent";
import GridWithPagination from '../GridWithPagination';
import OperationType from "./../utility/OperationType";
const _ = require('lodash');

export default class ExpenseCategoryList extends AppComponent {
    constructor(props) {
        super(props);

        this.state = {
            datasource: [],
            model: new ExpenseCategoryModel(),
            pageNo: 0,
            pageSize: 4,
            totalPages: 0
        };

        _.bindAll(this, ['renderGridActions', 'getPaginated', 'delete']);
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
        const dataFromRedirection = this.props.location.state;

        if (dataFromRedirection) {
            const verb = OperationType.getOperationVerb(dataFromRedirection.type);
            super.notifySuccess(`Category '${dataFromRedirection.model.name}' has been ${verb}.`);
        }
        this.getPaginated();
    }

    delete(event, model) {
        const categoryModel = ExpenseCategoryModel.clone(model);
        const that = this;
        categoryModel.delete(() => {
            super.notifySuccess(`Category '${model.name}' has been deleted.`);
            that.getPaginated();
        });
    }

    edit(event, model) {
        this.props.history.push('/expenses/categories/edit/' + model._id);
    }

    getPaginated(selected) {
        let { pageNo, pageSize } = this.state;
        if (selected >= 0) {
            pageNo = +selected;
        }
        this.state.model.getPaginated(pageNo, pageSize, (response) => {
            const { datasource, pageNo, pageSize, totalPages } = response;
            this.setState({ datasource, pageNo, pageSize, totalPages });
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
                        <GridWithPagination
                            attributes={attributes}
                            datasource={this.state.datasource}
                            headers={headers}
                            headerCssClasses={headerCssClasses}
                            columnCssClasses={columnCssClasses}
                            perPage={this.state.pageSize}
                            pageCount={this.state.totalPages}
                            pageRangeDisplayed="2"
                            loadDataSource={this.getPaginated}
                            activeClassName="active"
                        />
                    </div>
                </div>
                {this.renderToastContainer()}
            </div>
        );
    }
}
