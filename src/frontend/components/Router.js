import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import ExpenseListModel from './expense/ExpenseListModel';
import ExpenseCategoryListModel from './expense-category/ExpenseCategoryListModel';
import ExpenseCagegoryFormModel from './expense-category/FormModel';

const Content = () => (
    <div className="container body-content">
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/expenses/categories/new" component={ExpenseCagegoryFormModel} />
            <Route path="/expenses/categories" component={ExpenseCategoryListModel} />
            <Route path="/expenses" component={ExpenseListModel} />
        </Switch>
    </div>
);

export default Content;
