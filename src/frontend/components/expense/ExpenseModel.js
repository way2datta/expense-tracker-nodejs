import axios from 'axios';
import HttpStatus from 'http-status-codes';
import { formatCalenderDate } from '../../helpers/formatDate';

export default class ExpenseModel {
    get Url() {
        return window.APIUrl + '/users/1/expenses/';
    }

    static clone({ _id = 0, amount = 0, description = '', incurredAt }) {
        const newInstance = new ExpenseModel();
        newInstance.id = _id;
        newInstance.amount = amount;
        newInstance.description = description;
        newInstance.incurredAt = incurredAt;

        return newInstance;
    }

    static createInstance() {
        const newInstance = new ExpenseModel();

        newInstance.id = '';
        newInstance.amount = '';
        newInstance.description = '';
        newInstance.incurredAt = formatCalenderDate(new Date());

        return newInstance;
    }


    getPaginated(pageNo, pageSize, callback) {
        axios.get(this.Url, { params: { pageNo, pageSize } })
            .then((response) => {
                callback(response.data);
            });
    }

    getAll(callback) {
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

    toPayload() {
        var payload = {};
        for (const propertyName in this) {
            if (this.hasOwnProperty(propertyName)) {
                payload[propertyName] = this[propertyName];
            }
        }
        return payload;
    }

    create(callback, onError) {
        axios.post(this.Url, this.toPayload()).then((response) => {
            callback(response.data);
        }).catch(error => {
            if (error.response.status === HttpStatus.BAD_REQUEST) {
                onError(error.response.data.validation_error_message);
            }
        });
    }
}
