import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import ExpenseListModel from './expense/ExpenseListModel';
import ExpenseCategoryListModel from './expense-category/ExpenseCategoryListModel';
import EditExpenseCagegoryFormModel from './expense-category/EditFormModel';
import CreateExpenseCagegoryFormModel from './expense-category/CreateFormModel';

const Content = () => (
    <div className="container body-content">
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/expenses/categories/new" component={CreateExpenseCagegoryFormModel} />
            <Route path="/expenses/categories/edit/:id" component={EditExpenseCagegoryFormModel} />
            <Route path="/expenses/categories" component={ExpenseCategoryListModel} />
            <Route path="/expenses" component={ExpenseListModel} />
        </Switch>
    </div>
);

export default Content;
