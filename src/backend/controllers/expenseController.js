const Expense = require('../models/Expense');

export class ExpenseController {
    create(request, response) {
        var expense = new Expense(request.body);
        expense.save(function (error) {
            if (error) {
                console.log(error);
                response.status(400).send("unable to save to database");
            }
        });
        return response.json(expense);
    }
    getById(request, response) {
        Expense.findOne({ _id: request.params.expenseId })
            .populate({ path: 'category', model: 'ExpenseCategory', select: '_id name' })
            .exec(function (error, expense) {
                response.json(expense);
            });
    }
    getAll(request, response) {
        Expense.find()
            .populate({ path: 'category', model: 'ExpenseCategory', select: '_id name' })
            .exec(function (error, expenses) {
                response.json(expenses);
            });
    }
    update(request, response) {
        Expense.findById(request.params.expenseId, function (error, persisted) {
            if (!persisted) {
                console.log("Expense not found.");
                return response.sendStatus(400);
            }
            var fromBody = new Expense(request.body);
            persisted.amount = fromBody.amount;
            persisted.description = fromBody.description;
            persisted.incurredAt = fromBody.incurredAt;

            persisted.save(function (errorWhileUpdating) {
                if (errorWhileUpdating) {
                    console.log("Expense category not found.");
                    return response.sendStatus(400);
                }
            });
        });
    }
    delete(request, response) {
        Expense.deleteOne({ _id: request.params.expenseId }, function (error) {
            if (error) {
                console.log(error);
                return res.sendStatus(400);
            }
            response.json('Deleted');
        });
    }

}