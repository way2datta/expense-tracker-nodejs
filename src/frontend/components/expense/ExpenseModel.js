import axios from 'axios';

export default class ExpenseModel {
    get Url() {
        return 'http://localhost:3000/api/users/1/expenses/';
    }

    static clone({ _id = 0, amount = 0, description='',incurredAt }) {
        const newInstance = new ExpenseModel();
        newInstance.id = _id;
        newInstance.amount = amount;
        newInstance.description = description;
        newInstance.incurredAt = incurredAt;

        return newInstance;
    }

    getPaginated(pageNo, pageSize, callback) {
        axios.get(this.Url, { params: { pageNo, pageSize }})
            .then((response) => {
                callback(response.data);
            });
    }

    getAll (callback) {
        axios.get(this.Url)
            .then((response) => {
                callback(response.data);
            });
    }

    delete(callback) {
        axios.delete(this.Url + this.id, {
            id: this._id
        }).then((response) => {
            callback(response.data);
        });
    }
}
