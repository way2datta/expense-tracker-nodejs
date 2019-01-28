import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseCategoryModel from "./ExpenseCategoryModel";
import AppComponent from "./../utility/AppComponent";
import Grid from '../_Grid';
import OperationType from "./../utility/OperationType";
import DeleteModal from "./../../lib/_DeleteModal"
import Pagination from './../../lib/_Pagination';

const _ = require('lodash');

export default class ExpenseCategoryList extends AppComponent {
    constructor(props) {
        super(props);

        this.state = {
            datasource: [],
            model: new ExpenseCategoryModel(),
            pageNo: 0,
            pageSize: 4,
            totalPages: 0,
            selectedModel: undefined
        };

        _.bindAll(this, ['renderGridActions', 'getPaginated', 'onCloseModal']);
    }

    onCloseModal() {
        this.setState({ selectedModel: undefined });
    }

    selectModel(event, model) {
        this.setState({ selectedModel: model });
    }

    onConfirmDelete(event, model) {
        const clonedModel = ExpenseCategoryModel.clone(model);
        const that = this;
        clonedModel.delete(() => {
            super.notifySuccess(`Category '${clonedModel.name}' has been deleted.`);
            that.getPaginated();
            this.setState({ open: false, selectedModel: undefined });
        });
    }

    renderGridActions(model) {
        return <div className="text-right">
            <a className="btn btn-primary text-light btn-sm margin-right-20"
                onClick={e => this.edit(e, model)}>Edit</a>
            <a className="btn btn-danger text-light btn-sm"
                onClick={e => this.selectModel(e, model)}>Delete</a>
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
        const { selectedModel } = this.state;
        const open = selectedModel !== undefined;

        return (
            <div>
                <h3 className="heading">Expenses Categories</h3>
                <div className="margin-top-10 margin-bottom-20">
                    <Link to="/expenses/categories/new" className="btn btn-primary">New</Link>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <Grid
                            attributes={attributes}
                            datasource={this.state.datasource}
                            headers={headers}
                            headerCssClasses={headerCssClasses}
                            columnCssClasses={columnCssClasses}
                        />
                        <Pagination
                            containsRecords={this.state.datasource.length !== 0}
                            perPage={this.state.pageSize}
                            pageCount={this.state.totalPages}
                            loadDataSource={this.getPaginated}
                            activeClassName="active"
                        />
                    </div>
                </div>
                {this.renderToastContainer()}
                <DeleteModal open={open}
                    onClose={this.onCloseModal}
                    heading="Confirm delete"
                    content="Are you sure you want to delete?"
                    onConfirmDelete={e => this.onConfirmDelete(e, selectedModel)}
                />
            </div>
        );
    }
}
