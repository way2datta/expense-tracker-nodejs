import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
    return <div className={props.parentClassName}>
        <div className={`card ${props.backgroundColor}`}>
            <Link to={props.linkUrl} className="nav-link">{props.linkTitle}</Link>
        </div>
    </div >;
}

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h3 className="heading">Dashboard</h3>
                <div className="row">
                    <Card backgroundColor="bg-aqua"
                        linkTitle="Expenses"
                        linkUrl="/expenses"
                        parentClassName="col-sm-6"
                    />
                    <Card backgroundColor="bg-green"
                        linkTitle="Expenses categories"
                        linkUrl="/expenses/categories"
                        parentClassName="col-sm-6"
                    />
                    <Card backgroundColor="bg-yellow"
                        linkTitle="Expenses report"
                        linkUrl="/expenses/reports/summary"
                        parentClassName="col-sm-12"
                    />
                </div>
            </div>
        );
    }
}
