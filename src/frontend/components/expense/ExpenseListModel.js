import React from 'react';
import GridModel from '../GridModel';
import ExpenseModel from "./ExpenseModel";

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

    render() {
        const headers = ['Description', 'Amount', 'Incurred At'];
        const attributes = ['description', 'amount', 'incurredAt'];

        return (
            <GridModel
                headers={headers}
                attributes={attributes}
                datasource={this.state.expenses}
            />
        );
    }
}
