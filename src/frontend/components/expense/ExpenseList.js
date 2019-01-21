import React from 'react';
const _ = require('lodash');
import Modal from 'react-responsive-modal';
import Grid from '../Grid';
import AppComponent from "./../utility/AppComponent";
import ExpenseModel from "./ExpenseModel";
import { formatDate } from '../../helpers/formatDate';
import { formatMoney } from '../../helpers/formatMoney';
import Pagination from './../_Pagination';

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
            modelToDelete: undefined
        };
        _.bindAll(this, ['getPaginated', 'renderGridActions', 'onCloseModal']);
    }

    onOpenModal() {
        this.setState({ open: true });
    };

    onCloseModal() {
        this.setState({ open: false });
    };

    componentDidMount() {
        this.getPaginated();
    }

    delete(event, model) {
        this.setState({ open: true, modelToDelete: model });
    }

    onConfirmDelete(event, model) {
        const clonedModel = ExpenseModel.clone(model);
        const that = this;
        clonedModel.delete(() => {
            super.notifySuccess(`Expense '${clonedModel.description}' has been deleted.`);
            that.getPaginated();
            this.setState({ open: false, modelToDelete: undefined });
        });
    }

    renderGridActions(model) {
        return <div className="text-right">
            <a className="btn btn-danger text-light btn-sm"
                onClick={e => this.delete(e, model)}>Delete</a>
        </div>
    }

    getPaginated(selected) {
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
        const headerCssClasses = ['', 'text-right', 'text-right', ''];
        const attributes = ['description', this.formatAmount, this.formatIncurredDate,
            'category.name', this.renderGridActions];
        const columnCssClasses = ['', 'text-right', 'text-right', ''];
        const { open, modelToDelete } = this.state;
        return (
            <div>
                <h3 className="heading">Expenses</h3>
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
                <Modal open={open} onClose={this.onCloseModal} center >
                    <div className="modal-wrapper">
                        <h2>Confirm delete</h2>
                        <div className="content">
                            Are you sure you want to delete?
                        </div>
                        <div className="actions">
                            <a className="btn btn-light margin-right-20"
                                onClick={this.onCloseModal}>Cancel</a>
                            <a className="btn btn-danger"
                                onClick={e => this.onConfirmDelete(e, modelToDelete)}>Delete</a>
                        </div>
                    </div>
                </Modal>
                {this.renderToastContainer()}
            </div>
        );
    }
}