import React from 'react';
import ExpenseCategoryModel from "./ExpenseCategoryModel";
import GridModel from '../GridModel';

export default class ExpenseCategoryListModel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            model: new ExpenseCategoryModel()
        };
    }

    componentDidMount() {
        this.state.model.getAll((categories) => {
            this.setState({ categories });
        });
    }

    render() {
        const headers = ['Name'];
        const attributes = ['name'];

        return (
            <GridModel
                headers={headers}
                attributes={attributes}
                datasource={this.state.categories}
            />
        );
    }
}
