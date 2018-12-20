import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import ExpenseListModel from './expense/ExpenseListModel';
import ExpenseCategoryListModel from './expense-category/ExpenseCategoryListModel';

const Content = () => (
    <div className="container">
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/expenses" component={ExpenseListModel} />
            <Route path="/expense-categories" component={ExpenseCategoryListModel} />
        </Switch>
    </div>
);

export default Content;
