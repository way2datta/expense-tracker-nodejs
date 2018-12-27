import React from 'react';
import { BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip, LabelList,ResponsiveContainer }
    from 'recharts';
import ExpenseReportModel from "./ExpenseReportModel";

export default class ExpenseReportSummary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            datasource: [],
            model: new ExpenseReportModel()
        };
    }
    componentDidMount() {
        this.state.model.getAll((datasource) => {
            this.setState({ datasource });
        });
    }

    kFormatter(money) {
        return money > 999 ? (money/1000).toFixed(1) + 'k' : money
    }

    render() {
        return (
            <div>
                <h3 className="heading">Expense summary reports</h3>
                <ResponsiveContainer width={900} height="50%">
                    <BarChart data={this.state.datasource} height="90%" >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="categoryName" height={50}
                            label={{ stroke: 'red', strokeWidth: 1, value: "Category", 
                                position: "insideBottom", offset: 0 }} 
                        />
                        <YAxis yAxisId="totalAmount" width={70}
                            label={{ stroke: 'red', strokeWidth: 1, value: 'Total amount in dollars.', 
                                angle: -90, position: 'insideLeft', textAnchor: 'middle' }}
                            tickFormatter={(value) => this.kFormatter(value)} 
                        />
                        <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                        <Bar yAxisId="totalAmount" dataKey="totalAmount">
                            <LabelList fill="#2cc1e6" angle={-90} formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                            {
                                this.state.datasource.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index % 20} />
                                ))
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}