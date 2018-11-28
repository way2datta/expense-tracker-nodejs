import React from 'react';
import axios from 'axios';

export default class Expense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users/1/expenses/`)
      .then(response => {
        const expenses = response.data;
        this.setState({ expenses });
      })
  }

  render() {
    return (
      <ul>
        {this.state.expenses.map(expense => <li>{expense.description} {expense.amount} {expense.incurredAt} {expense.category.name}</li>)}
      </ul>
    )
  }
}