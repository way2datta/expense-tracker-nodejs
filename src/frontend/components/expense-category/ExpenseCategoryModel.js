import axios from 'axios';

export default class ExpenseCategoryModel {
    getAll (callback) {
        axios.get('http://localhost:3000/api/users/1/expenses/categories/')
            .then((response) => {
                callback(response.data);
            });
    }
}