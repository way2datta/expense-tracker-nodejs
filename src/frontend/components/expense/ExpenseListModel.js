import React from 'react';
import GridModel from '../GridModel';
import ExpenseModel from "./ExpenseModel";
import { formatDate } from './../../helpers/formatDate';
import { formatMoney } from './../../helpers/formatMoney';

export default class ExpenseListModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
            model: new ExpenseModel()
        };
    }

    componentDidMount() {
        this.state.model.getAll((expenses) => {
            this.setState({ expenses });
        });
    }
      
    formatIncurredDate(model) {
        return formatDate(model.incurredAt);
    }

    formatAmount(model) {
        return formatMoney(model.amount)
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