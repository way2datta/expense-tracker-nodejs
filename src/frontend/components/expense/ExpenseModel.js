import axios from 'axios';

export default class ExpenseModel {
    static clone({ _id = 0, amount = 0, description='',incurredAt }) {
        const newInstance = new ExpenseModel();
        newInstance.id = _id;
        newInstance.amount = amount;
        newInstance.description = description;
        newInstance.incurredAt = incurredAt;

        return newInstance;
    }

    getAll (callback) {
        axios.get('http://localhost:3000/api/users/1/expenses/')
            .then((response) => {
                callback(response.data);
            });
    }
}
