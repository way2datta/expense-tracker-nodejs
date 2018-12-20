import axios from 'axios';

export default class ExpenseModel {
    getAll (callback) {
        axios.get('http://localhost:3000/api/users/1/expenses/')
            .then((response) => {
                callback(response.data);
            });
    }
}
