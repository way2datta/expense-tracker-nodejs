import HttpStatus from 'http-status-codes';
import ExpenseCategory from "../models/ExpenseCategory";

export default class ExpenseCategoryController {
    create(request, response) {
        const expenseCategory = new ExpenseCategory(request.body);
        expenseCategory.save((error) => {
            if (error) {
                return response.status(HttpStatus.BAD_REQUEST).send('Unable to create expense category.');
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
            return response.status(HttpStatus.OK).json(categories);
        });
    }

    getAll(request, response) {
        ExpenseCategory.find({}, (error, categories) => {
            if (error) {
                console.log(error);
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }
            return response.status(HttpStatus.OK).json(categories);
        });
    }

    update(request, response) {
        ExpenseCategory.findById(request.params.categoryId, (error, persisted) => {
            const persistedEntity = persisted;
            if (!persisted) {
                console.log('Expense category not found.');
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }

            const fromBody = new ExpenseCategory(request.body);
            persistedEntity.name = fromBody.name;
            persistedEntity.save((errorWhileUpdating) => {
                if (errorWhileUpdating) {
                    console.log(errorWhileUpdating);
                    return response.sendStatus(HttpStatus.BAD_REQUEST);
                }
                return response.status(HttpStatus.OK).json(persistedEntity);
            });
            return response.sendStatus(HttpStatus.OK);
        });
    }

    delete(request, response) {
        ExpenseCategory.deleteOne({ _id: request.params.categoryId }, (error) => {
            if (error) {
                console.log(error);
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }
            return response.sendStatus(HttpStatus.OK);
        });
    }
}
