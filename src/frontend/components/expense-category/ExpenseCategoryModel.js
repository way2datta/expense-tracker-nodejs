import axios from 'axios';

export default class ExpenseCategoryModel {
    constructor() {
        this.name = '';
    }
    getAll (callback) {
        axios.get('http://localhost:3000/api/users/1/expenses/categories/')
            .then((response) => {
                callback(response.data);
            });
    }
    create (callback) {
        axios.post('http://localhost:3000/api/users/1/expenses/categories/', {
            name: this.name
        }) .then((response) => {
            callback(response.data);
        });
    }
}