import React from 'react';
import { BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip, LabelList } from 'recharts';
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

    render() {
        return (
            <div>
                <h3 className="heading">Expense summary reports</h3>

                <BarChart width={900} height={400} data={this.state.datasource} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="categoryName" height={50}
                        tick={{stroke: 'red', strokeWidth: 1}}
                        label={{ value: "Category", position: "insideBottom", offset: 0 }} 
                    />
                    <YAxis yAxisId="totalAmount" width={70}
                        tick={{stroke: 'red', strokeWidth: 1}} 
                        label={{ value: 'Total amount', angle: -90, position: 'insideLeft', textAnchor: 'middle' }}
                    />
                    <Tooltip />
                    <CartesianGrid vertical={false} />
                    <Bar yAxisId="totalAmount" dataKey="totalAmount">
                        <LabelList fill="#2cc1e6" angle={-45} />
                        {
                            this.state.datasource.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index % 20} />
                            ))
                        }
                    </Bar>
                </BarChart>
            </div>
        );
    }
}