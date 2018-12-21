import ExpenseCategory from "../models/ExpenseCategory";

export default class ExpenseCategoryService {
    async create(categoryParam) {
        const category = new ExpenseCategory(categoryParam);
        await category.save();
        return category;
    }
    async getAll() {
        return await ExpenseCategory.find().sort({'_id': -1  });
    }
    
    async getById(id) {
        return await ExpenseCategory.findById(id);
    }

    async update(id, expenseCategoryParam) {
        const category = await ExpenseCategory.findById(id);
        if (!category) {
            throw 'ExpenseCategory not found';
        } 
        Object.assign(category, expenseCategoryParam);
        await category.save();
        return category;
    }
    
    async delete(id) {
        await ExpenseCategory.findByIdAndRemove(id);
    }
}
