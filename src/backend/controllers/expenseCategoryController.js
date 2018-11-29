const ExpenseCategory = require('../models/ExpenseCategory');
var HttpStatus = require('http-status-codes');

export class ExpenseCategoryController {
    create(request, response) {
        var expenseCategory = new ExpenseCategory(request.body);
        expenseCategory.save(function (error) {
            if (error) {
                response.status(HttpStatus.BAD_REQUEST).send('Unable to create expense category.');
            }
            return response.status(HttpStatus.CREATED).json(expenseCategory);
        });
    }
    getById(request, response) {
        ExpenseCategory.findOne({ _id: request.params.categoryId }, (error, categories) => {
            if (error) {
                console.log(error);
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }
            response.status(HttpStatus.OK).json(categories);
        });
    }
    getAll(request, response) {
        ExpenseCategory.find({}, (error, categories) => {
            if (error) {
                console.log(error);
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }
            response.status(HttpStatus.OK).json(categories);
        });
    }
    update(request, response) {
        ExpenseCategory.findById(request.params.categoryId, function (error, persisted) {
            if (!persisted) {
                console.log("Expense category not found.");
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }

            var fromBody = new ExpenseCategory(request.body);
            persisted.name = fromBody.name;
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
        ExpenseCategory.deleteOne({ _id: request.params.categoryId }, function (error) {
            if (error) {
                console.log(error);
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }
            return response.sendStatus(HttpStatus.OK);
        });
    }
}