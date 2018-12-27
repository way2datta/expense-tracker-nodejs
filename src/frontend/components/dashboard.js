import React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h3 className="heading">Dashboard</h3>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="card bg-aqua">
                            <Link to="/expenses" className="nav-link">Expenses</Link>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="card bg-green">
                            <Link to="/expenses/categories" className="nav-link">Expenses categories</Link>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="card bg-yellow">
                            <Link to="/expenses/reports/summary" className="nav-link">Expenses report</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
