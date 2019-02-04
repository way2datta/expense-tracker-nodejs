import axios from 'axios';
import HttpStatus from 'http-status-codes';

export default class ExpenseCategoryModel {
    get Url() {
        return window.APIUrl + '/users/1/expenses/categories/';
    }

    constructor() {
        this.name = '';
    }

    static clone({ _id = 0, name = '' }) {
        const newInstance = new ExpenseCategoryModel();
        newInstance.id = _id;
        newInstance.name = name;
        return newInstance;
    }

    getAll(callback) {
        axios.get(this.Url + 'all')
            .then((response) => {
                callback(response.data);
            });
    }

    getPaginated(pageNo, pageSize, callback) {
        axios.get(this.Url, { params: { pageNo, pageSize } })
            .then((response) => {
                callback(response.data);
            });
    }

    create(callback, onValidationError, onError) {
        const errors = this.validateModel();
        if (errors) {
            onValidationError(errors);
            return
        }
        axios.post(this.Url, {
            name: this.name
        }).then((response) => {
            callback(response.data);
        }).catch(error => {
            if (error.response.status === HttpStatus.BAD_REQUEST) {
                onError(error.response.data.validationErrors);
            }
        });
    }

    delete(callback) {
        axios.delete(this.Url + this.id, {
            id: this._id
        }).then((response) => {
            callback(response.data);
        });
    }

    getById(callback) {
        axios.get(this.Url + this.id)
            .then((response) => {
                callback(ExpenseCategoryModel.clone(response.data));
            });
    }

    update(callback, onError) {
        axios.put(this.Url + this.id, {
            name: this.name
        }).then((response) => {
            callback(response.data);
        }).catch(error => {
            if (error.response.status === HttpStatus.BAD_REQUEST) {
                onError(error.response.data.validation_error_message);
            }
        });
    }

    getConstraints() {
        return { name: { presence: { allowEmpty: false } } }
    }

    validateModel() {
        var validate = require("validate.js");
        return validate({ "name": this.name }, this.getConstraints());
    }
}