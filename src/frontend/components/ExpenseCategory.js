import React from 'react';
import axios from 'axios';
import GridModel from "./GridModel";

export default class ExpenseCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/1/expenses/categories/`)
      .then(response => {
        const categories = response.data;
        this.setState({ categories });
      })
  }

  render() {
    const headers = ['Name'];
    const attributes = ['name'];

    return (
      <GridModel headers={headers}
        attributes={attributes}
        datasource={this.state.categories} />
    );
  }
}