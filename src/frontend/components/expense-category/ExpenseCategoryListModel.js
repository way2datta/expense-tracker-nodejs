import React from 'react';
import { Link } from 'react-router-dom';
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
            <div>
                <div className="margin-top-10 margin-bottom-20">
                    <Link to="/expenses/categories/new" className="btn btn-primary">New</Link>
                </div>
                <GridModel
                    headers={headers}
                    attributes={attributes}
                    datasource={this.state.categories}
                />
            </div>
        );
    }
}
