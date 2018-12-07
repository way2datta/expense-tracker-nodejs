import Expense from "../models/Expense";

export default class ExpenseService {
    async create(expenseParam) {
        const expense = new Expense(expenseParam);
        await expense.save();
        return expense;
    }

    async getAll() {
        return await Expense.find()
            .populate({ path: 'category', model: 'ExpenseCategory', select: '_id name' });
    }
    
    async getById(id) {
        return await Expense.findById(id)
            .populate({ path: 'category', model: 'ExpenseCategory', select: '_id name' });
    }

    async update(id, expenseParam) {
        const expense = await Expense.findById(id);
        if (!expense) {
            throw 'Expense not found';
        } 
        Object.assign(expense, expenseParam);
        await expense.save();
        return expense;
    }
    
    async delete(id) {
        await Expense.findByIdAndRemove(id);
    }
}
