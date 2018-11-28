import React from 'react';
import axios from 'axios';

export default class ExpenseCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users/1/expenses/categories/`)
      .then(response => {
        const categories = response.data;
        this.setState({ categories });
      })
  }

  render() {
    return (
      <ul>
        {this.state.categories.map(c => <li>{c.name}</li>)}
      </ul>
    )
  }
}