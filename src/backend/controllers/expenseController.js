const Expense = require('../models/Expense');

export class ExpenseController {
    create(request, response) {
        var expense = new Expense(request.body);
        expense.save(function (error) {
            if (error) {
                console.log(error);
                response.status(HttpStatus.BAD_REQUEST).send('Unable to create expense.');
            }
            return response.status(HttpStatus.CREATED).json(expense);
        });
    }
    getById(request, response) {
        Expense.findOne({ _id: request.params.expenseId })
            .populate({ path: 'category', model: 'ExpenseCategory', select: '_id name' })
            .exec(function (error, expense) {
                if (error) {
                    console.log(error);
                    return response.sendStatus(HttpStatus.BAD_REQUEST);
                }
                response.status(HttpStatus.OK).json(expense);
            });
    }
    getAll(request, response) {
        Expense.find()
            .populate({ path: 'category', model: 'ExpenseCategory', select: '_id name' })
            .exec(function (error, expenses) {
                if (error) {
                    console.log(error);
                    return response.sendStatus(HttpStatus.BAD_REQUEST);
                }
                response.status(HttpStatus.OK).json(expenses);
            });
    }
    update(request, response) {
        Expense.findById(request.params.expenseId, function (error, persisted) {
            if (!persisted) {
                console.log("Expense not found.");
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }
            var fromBody = new Expense(request.body);
            persisted.amount = fromBody.amount;
            persisted.description = fromBody.description;
            persisted.incurredAt = fromBody.incurredAt;

            persisted.save(function (errorWhileUpdating) {
                if (errorWhileUpdating) {
                    console.log(errorWhileUpdating);
                    return response.sendStatus(HttpStatus.BAD_REQUEST);
                }
                return response.status(HttpStatus.OK).json(persisted);
            });
        });
    }
    delete(request, response) {
        Expense.deleteOne({ _id: request.params.expenseId }, function (error) {
            if (error) {
                console.log(error);
                return res.sendStatus(HttpStatus.BAD_REQUEST);
            }
            response.sendStatus(HttpStatus.OK);
        });
    }

}