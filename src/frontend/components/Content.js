import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from "./dashboard";
import Expense from "./Expense";
import ExpenseCategory from "./ExpenseCategory";

const Content = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/expenses" component={Expense} />
        <Route path="/expense-categories" component={ExpenseCategory} />
      </Switch>
    </div>
  )
}

export default Content;