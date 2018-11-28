const ExpenseCategory = require('../models/ExpenseCategory');

export class ExpenseCategoryController {
    create(request, response) {
        var expenseCategory = new ExpenseCategory(request.body);
        expenseCategory.save(function (error) {
            if (error) {
                res.status(400).send("unable to save to database");
            }
        });
        return response.json(expenseCategory);
    }
    getById(request, response) {
        ExpenseCategory.findOne({ _id: request.params.categoryId }, (error, categories) => {
            if (error) {
                console.log(error);
                return res.sendStatus(400);
            }
            response.json(categories);
        });
    }
    getAll(request, response) {
        ExpenseCategory.find({}, (error, categories) => {
            if (error) {
                console.log(error);
                return res.sendStatus(400);
            }
            response.json(categories);
        });
    }
    update(request, response) {
        ExpenseCategory.findById(request.params.categoryId, function (error, persisted) {
            if (!persisted) {
                console.log("Expense category not found.");
                return response.sendStatus(400);
            }

            var fromBody = new ExpenseCategory(request.body);
            persisted.name = fromBody.name;
            persisted.save(function (errorWhileUpdating) {
                if (errorWhileUpdating) {
                    console.log("Expense category not found.");
                    return response.sendStatus(400);
                }
            });
        });
        return response.send('Update expense category...');
    }

    delete(request, response) {
        ExpenseCategory.deleteOne({ _id: request.params.categoryId }, function (error) {
            if (error) {
                console.log(error);
                return res.sendStatus(400);
            }
            response.json('Deleted');
        });
    }
}