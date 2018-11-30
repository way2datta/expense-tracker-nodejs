import HttpStatus from 'http-status-codes';
import Expense from "../models/Expense";
import Logger from "./../Logger";

export default class ExpenseController {
    create(request, response) {
        const expense = new Expense(request.body);
        expense.save((error) => {
            if (error) {
                Logger.log(error);
                return response.status(HttpStatus.BAD_REQUEST).send('Unable to create expense.');
            }
            return response.status(HttpStatus.CREATED).json(expense);
        });
    }

    getById(request, response) {
        Expense.findOne({ _id: request.params.expenseId })
            .populate({ path: 'category', model: 'ExpenseCategory', select: '_id name' })
            .exec((error, expense) => {
                if (error) {
                    Logger.log(error);
                    return response.sendStatus(HttpStatus.BAD_REQUEST);
                }
                return response.status(HttpStatus.OK).json(expense);
            });
    }

    getAll(request, response) {
        Expense.find()
            .populate({ path: 'category', model: 'ExpenseCategory', select: '_id name' })
            .exec((error, expenses) => {
                if (error) {
                    Logger.log(error);
                    return response.sendStatus(HttpStatus.BAD_REQUEST);
                }
                return response.status(HttpStatus.OK).json(expenses);
            });
    }

    update(request, response) {
        Expense.findById(request.params.expenseId, (error, persisted) => {
            if (!persisted) {
                Logger.log('Expense not found.');
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }
            const fromBody = new Expense(request.body);
            const persistedEntity = persisted;
            persistedEntity.amount = fromBody.amount;
            persistedEntity.description = fromBody.description;
            persistedEntity.incurredAt = fromBody.incurredAt;

            persistedEntity.save((errorWhileUpdating) => {
                if (errorWhileUpdating) {
                    Logger.log(errorWhileUpdating);
                    return response.sendStatus(HttpStatus.BAD_REQUEST);
                }
                return response.status(HttpStatus.OK).json(persistedEntity);
            });
            return response.setStatus(HttpStatus.OK);
        });
    }

    delete(request, response) {
        Expense.deleteOne({ _id: request.params.expenseId }, (error) => {
            if (error) {
                Logger.log(error);
                return response.sendStatus(HttpStatus.BAD_REQUEST);
            }
            return response.sendStatus(HttpStatus.OK);
        });
    }
}
