import axios from 'axios';

export default class ExpenseReportModel {
    getAll(callback) {
        axios.get(window.APIUrl + '/users/1/expenses/all')
            .then((response) => {
                callback(this.getSummaryReport(response));
            });
    }

    getSummaryReport(response) {
        const datasource = [];
        const grouped = groupBy(response.data, (model) => model.category.name);

        for (const categoryName of grouped.keys()) {
            console.log({ categoryName, c: grouped.get(categoryName), grouped });
            const categoryWiseSum = grouped.get(categoryName).reduce((sum, current) => {
                sum += current.amount;
                return sum;
            }, 0);
            datasource.push({ categoryName, totalAmount: categoryWiseSum });
        }
        console.log(datasource)
        return datasource;
    }


}

function groupBy(collection, iteratee) {
    return collection.reduce((acc, current) => {
        var key = iteratee(current);
        if (!acc.has(key)) acc.set(key, []);
        const items = acc.get(key);
        items.push(current)
        acc.set(key, items);
        return acc;
    }, new Map());
}

