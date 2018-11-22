export class ExpenseController {
    create(request, response) {
        console.log("Expense  creation logic...")
        return response.send('Expense created successfully.');
    }
    getById(request, response) {
        console.log("Get expense  by id...")
        return response.send('Get expense  by id...');
    }
    getAll(request, response) {
        console.log("Get all expense ...")
        return response.send('Get all expense ...');
    }
    update(request, response) {
        console.log("Update expense ...")
        return response.send('Update expense ...');
    }
    delete(request, response) {
        console.log("Delete expense ...")
        return response.send('Delete expense ...');
    }

}