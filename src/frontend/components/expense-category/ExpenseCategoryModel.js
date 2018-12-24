import axios from 'axios';

export default class ExpenseCategoryModel {
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
        axios.get('http://localhost:3000/api/users/1/expenses/categories/')
            .then((response) => {
                callback(response.data);
            });
    }
    create(callback) {
        axios.post('http://localhost:3000/api/users/1/expenses/categories/', {
            name: this.name
        }).then((response) => {
            callback(response.data);
        });
    }

    delete(callback) {
        axios.delete('http://localhost:3000/api/users/1/expenses/categories/' + this.id, {
            id: this._id
        }).then((response) => {
            callback(response.data);
        });
    }
}