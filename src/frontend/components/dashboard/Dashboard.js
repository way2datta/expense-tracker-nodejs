import React from 'react';
import { Card } from './Card';

export default class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <h3 className="heading">Dashboard</h3>
                <div className="row">
                    <Card cardClassName="bg-aqua"
                        linkTitle="Expenses"
                        linkUrl="/expenses"
                        parentClassName="col-sm-6"
                    />
                    <Card cardClassName="bg-green"
                        linkTitle="Expenses categories"
                        linkUrl="/expenses/categories"
                        parentClassName="col-sm-6"
                    />
                    <Card cardClassName="bg-yellow"
                        linkTitle="Expenses report"
                        linkUrl="/expenses/reports/summary"
                        parentClassName="col-sm-12"
                    />
                </div>
            </div>
        );
    }
}
