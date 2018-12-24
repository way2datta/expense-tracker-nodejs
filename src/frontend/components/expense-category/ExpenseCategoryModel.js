import axios from 'axios';

export default class ExpenseCategoryModel {
    get Url() {
        return 'http://localhost:3000/api/users/1/expenses/categories/';
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
        axios.get(this.Url)
            .then((response) => {
                callback(response.data);
            });
    }

    create(callback) {
        axios.post(this.Url, {
            name: this.name
        }).then((response) => {
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

    getById(callback) {
        axios.get(this.Url + this.id)
            .then((response) => {
                callback(ExpenseCategoryModel.clone(response.data));
            });
    }

    update(callback) {
        axios.put(this.Url + this.id, {
            name: this.name
        }).then((response) => {
            callback(response.data);
        });
    }
}