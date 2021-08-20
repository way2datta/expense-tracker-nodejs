import React from 'react';
import { BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer }
    from 'recharts';
import ExpenseReportModel from "./ExpenseReportModel";

export default class ExpenseReportSummary extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            datasource: [],
            openCalender: false,
            model: new ExpenseReportModel(),
            monthAndYearSelected: this.getCurrentMonthAndYear(),
        };
    }

    getMonthName(month) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        return monthNames[month];
    }

    getSelectedMonthAndYear = () => {
        const { month, year } = this.state.monthAndYearSelected;
        return this.getMonthName(month) + " - " + year;
    }

    getCurrentMonthAndYear() {
        var now = new Date();
        var month = now.getUTCMonth();
        var year = now.getUTCFullYear();
        return { year, month };
    }

    setNextMonthAndYear() {
        var nextMonth = 0;
        var nextYear = 0;

        if (this.state.monthAndYearSelected.month == 11) {
            nextMonth = 0;
            nextYear = this.state.monthAndYearSelected.year + 1;
        }
        else {
            nextMonth = this.state.monthAndYearSelected.month + 1;
        }
        this.setState({ monthAndYearSelected: { year: nextYear, month: nextMonth } });
    }

    setPreviousMonthAndYear() {
        var previousMonth = 0;
        var previousYear = 0;

        if (this.state.monthAndYearSelected.month == 0) {
            previousMonth = 11;
            previousYear = this.state.monthAndYearSelected.year - 1;
        }
        else {
            previousMonth = this.state.monthAndYearSelected.month - 1;
        }
        this.setState({ monthAndYearSelected: { year: previousYear, month: previousMonth } });
    }


    componentDidMount() {
        this.state.model.getAll((datasource) => {
            this.setState({ datasource });
        });
    }


    kFormatter(money) {
        return money > 999 ? (money / 1000).toFixed(1) + 'k' : money
    }

    render() {
        return (
            <div>
                <h3 className="heading">Expense summary reports</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="month-selector">
                            <a href="#" className="prev">Prev month</a>
                            <span>{this.getSelectedMonthAndYear()}</span>
                            <a href="#" className="next">Next month</a>
                        </div>
                    </div>
                </div>
                <div className="margin-top-20 margin-bottom-20">
                    <ResponsiveContainer width={900}>
                        <BarChart data={this.state.datasource}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="categoryName" height={50}
                                label={{
                                    stroke: 'black', strokeWidth: 1, value: "Category",
                                    position: "insideBottom", offset: 0
                                }}
                            />
                            <YAxis yAxisId="totalAmount" width={70}
                                label={{
                                    stroke: 'black', strokeWidth: 1, value: 'Total amount in dollars.',
                                    angle: -90, position: 'insideLeft', textAnchor: 'middle'
                                }}
                                tickFormatter={(value) => this.kFormatter(value)}
                            />
                            <Tooltip formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                            <Bar yAxisId="totalAmount" dataKey="totalAmount">
                                <LabelList angle={-90} 
                                    formatter={(value) => new Intl.NumberFormat('en').format(value)} />
                                {
                                    this.state.datasource.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={`${index % 20}`} />
                                    ))
                                }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div >
            </div>
        );
    }
}