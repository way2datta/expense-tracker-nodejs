import axios from 'axios';
const _ = require('lodash');

export default class ExpenseReportModel {
    getAll (callback) {
        axios.get('http://localhost:3000/api/users/1/expenses/')
            .then((response) => {
                callback(this.getSummaryReport(response));
            });
    }

    getSummaryReport(response) {
        const datasource = [];
        const grouped = _.groupBy(response.data, (model)=> model.category.name );
        
        for (const categoryName in grouped) {
            const categoryWiseSum = _.sumBy(grouped[categoryName], 'amount');
            datasource.push({ categoryName, totalAmount: categoryWiseSum}); 
        }
        return datasource;
    }
}
