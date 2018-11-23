import React from 'react';

export default class Dashboard extends React.Component {
  render() {
    return <div className="row">
      <div class="col-sm-6">
        <div class="card bg-aqua">
          <a class="nav-link" routerLink="/expenses" routerLinkActive="active">Expenses</a>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card bg-green"><a routerLink="/expense-categories">Expenses categories</a></div>
      </div>
      <div class="col-sm-6">
        <div class="card bg-yellow"><a routerLink="/expenses-report">Expenses report</a></div>
      </div>
    </div>
  }
}