export class ExpenseCategoryController {
    create(request, response) {
        console.log("Expense category creation logic...")
        return response.send('ExpenseCategory created successfully.');
    }
    getById(request, response) {
        console.log("Get expense category by id...")
        return response.send('Get expense category by id...');
    }
    getAll(request, response) {
        console.log("Get all expense category...")
        return response.send('Get all expense category...');
    }
    update(request, response) {
        console.log("Update expense category...")
        return response.send('Update expense category...');
    }
    delete(request, response) {
        console.log("Delete expense category...")
        return response.send('Delete expense category...');
    }

}