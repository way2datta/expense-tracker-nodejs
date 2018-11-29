import React from 'react';
import axios from 'axios';
import GridModel from './GridModel';

export default class Expense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/users/1/expenses/')
            .then((response) => {
                const expenses = response.data;
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
