import React from 'react';
import GridModel from '../GridModel';
import ExpenseModel from "./ExpenseModel";
const _ = require('lodash');

export default class ExpenseListModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            model: new ExpenseModel()
        };
        _.bindAll(this, ['formatAmount', 'formatDate', 'formatIncurredDate']);
    }

    componentDidMount() {
        this.state.model.getAll((expenses) => {
            this.setState({ expenses });
        });
    }

    formatMoney(money) {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        })
          
        return formatter.format(money);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
      
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
      
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }
      
    formatIncurredDate(model) {
        return this.formatDate(model.incurredAt);
    }

    formatAmount(model) {
        return this.formatMoney(model.amount)
    }

    render() {
        const headers = ['Description', 'Amount', 'Incurred At','Category'];
        const headerCssClasses = ['','text-right' ,'text-right' ,''];
        const attributes = ['description', this.formatAmount, this.formatIncurredDate,
            'category.name'];
        const columnCssClasses = ['','text-right' ,'text-right' ,''];

        return (
            <div>
                <h3 className="heading">Expenses</h3>
                <GridModel
                    attributes={attributes}
                    datasource={this.state.expenses}
                    headers={headers}
                    headerCssClasses={headerCssClasses}
                    columnCssClasses={columnCssClasses}
                />
            </div>
        );
    }
}
