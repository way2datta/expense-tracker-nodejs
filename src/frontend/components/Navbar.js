import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </li>
          <li class="nav-item">
            <Link to="/expenses" className="nav-link">Expenses</Link>
          </li>
          <li class="nav-item">
            <Link to="/expense-categories" className="nav-link">Expenses categories</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
}

export default Navbar