import React from 'react';
const _ = require('lodash');
import Grid from '../Grid';
import ExpenseModel from "./ExpenseModel";
import { formatDate } from '../../helpers/formatDate';
import { formatMoney } from '../../helpers/formatMoney';
import Pagination from './../_Pagination';

export default class ExpenseList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datasource: [],
            model: new ExpenseModel(),
            pageNo: 0,
            pageSize: 10,
            totalPages: 0
        };
        _.bindAll(this, ['getPaginated']);
    }

    componentDidMount() {
        this.getPaginated();
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

    delete(event, model) {
        const expenseModel = ExpenseModel.clone(model);
        const that = this;
        expenseModel.delete(() => {
            var filtered = this.state.datasource.filter(function (expense) {
                return expense._id != expenseModel.id;
            });
            that.setState({ datasource: filtered });
        });
    }

    formatIncurredDate(model) {
        return formatDate(model.incurredAt);
    }

    formatAmount(model) {
        return formatMoney(model.amount)
    }

    render() {
        const headers = ['Description', 'Amount', 'Incurred At', 'Category'];
        const headerCssClasses = ['', 'text-right', 'text-right', ''];
        const attributes = ['description', this.formatAmount, this.formatIncurredDate,
            'category.name'];
        const columnCssClasses = ['', 'text-right', 'text-right', ''];

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
                    activeClassName="active" />
            </div>
        );
    }
}