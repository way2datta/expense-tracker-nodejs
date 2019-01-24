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

    async getPaginated(request) {
        var pageNo = parseInt(request.query.pageNo);
        var pageSize = parseInt(request.query.pageSize);
        var query = {};

        if (pageNo < 0) {
            const customResponse = { "error": true, "message": "invalid page number, should start with 1" };
            return request.json(customResponse);
        }

        query.skip = pageSize * (pageNo);
        query.limit = pageSize;

        const datasource = await Expense.find({}, {}, query)
            .populate({
                path: 'category',
                model: 'ExpenseCategory',
                select: '_id name'
            })
            .sort({ 'updatedAt': -1 });

        const totalSize = await this.getCount();
        const totalPages = Math.ceil(totalSize / pageSize);

        return {
            datasource,
            totalPages,
            pageNo,
            pageSize
        }
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

    async getCount() {
        return await Expense.count();
    }
}
