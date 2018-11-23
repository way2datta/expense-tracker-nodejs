import React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
  render() {
    return <div className="row" >
      <div class="col-sm-6">
        <div class="card bg-aqua">
          <Link to="/expenses" className="nav-link">Expenses</Link>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card bg-green">
          <Link to="/expense-categories" className="nav-link">Expenses categories</Link>
        </div>
      </div>
    </div>
  }
}