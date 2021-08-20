import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '../_Grid';
import AppComponent from "./../utility/AppComponent";
import ExpenseModel from "./ExpenseModel";
import { formatDate } from '../../helpers/formatDate';
import { formatMoney } from '../../helpers/formatMoney';
import Pagination from './../../lib/_Pagination';
import DeleteModal from "./../../lib/_DeleteModal"

export default class ExpenseList extends AppComponent {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            datasource: [],
            model: new ExpenseModel(),
            pageNo: 0,
            pageSize: 10,
            totalPages: 0,
            selectedModel: undefined,
        };
    }

    onCloseModal = () => {
        this.setState({ selectedModel: undefined });
    }

    componentDidMount() {
        this.getPaginated();
    }

    selectModel(event, model) {
        this.setState({ selectedModel: model });
    }

    onConfirmDelete(event, model) {
        const clonedModel = ExpenseModel.clone(model);
        const that = this;
        clonedModel.delete(() => {
            super.notifySuccess(`Expense '${clonedModel.description}' has been deleted.`);
            that.getPaginated();
            this.setState({ open: false, selectedModel: undefined });
        });
    }

    renderGridActions = (model) => {
        return <div className="text-right">
            <a className="btn btn-danger text-light btn-sm"
                onClick={e => this.selectModel(e, model)}>Delete</a>
        </div>
    }

    getPaginated = (selected) => {
        let { pageNo, pageSize } = this.state;
        if (selected >= 0) {
            pageNo = selected;
        }
        this.state.model.getPaginated(pageNo, pageSize, (response) => {
            const { datasource, pageNo, pageSize, totalPages } = response;
            this.setState({ datasource, pageNo, pageSize, totalPages });
        });
    }

    formatIncurredDate(model) {
        return formatDate(model.incurredAt);
    }

    formatAmount(model) {
        return formatMoney(model.amount)
    }

    render() {
        const headers = ['Description', 'Amount', 'Incurred At', 'Category', ''];
        const headerCssClasses = ['', 'text-right', 'text-right', 'padding-left-30'];
        const attributes = ['description', this.formatAmount, this.formatIncurredDate,
            'category.name', this.renderGridActions];
        const columnCssClasses = ['', 'text-right', 'text-right', 'padding-left-30'];
        const { selectedModel } = this.state;
        const open = selectedModel !== undefined;

        return (
            <div>
                <h3 className="heading">Expenses</h3>
                <div className="margin-top-10 margin-bottom-20">
                    <Link to="/expenses/new" className="btn btn-primary">New</Link>
                </div>
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
                <DeleteModal open={open}
                    onClose={this.onCloseModal}
                    heading="Confirm delete"
                    content="Are you sure you want to delete?"
                    onConfirmDelete={e => this.onConfirmDelete(e, selectedModel)}
                />
                {this.renderToastContainer()}
            </div>
        );
    }
}