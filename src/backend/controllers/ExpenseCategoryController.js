import ExpenseCategory from "../models/ExpenseCategory";
import BaseController from './BaseController';
import Logger from "./../Logger";

export default class ExpenseCategoryController extends BaseController {
    constructor(props) {
        super(props);
        this.update = this.update.bind(this)
    }

    create(request, response) {
        const model = new ExpenseCategory(request.body);
        model.save((error) => {
            if (error) {
                super.BAD_REQUEST(response, 'Unable to create expense category.');
            }
            super.CREATED(response, model);
        });
    }

    getById(request, response) {
        const criteria = { _id: request.params.categoryId };
        ExpenseCategory.findOne(criteria, (error, categories) => {
            if (error) {
                Logger.log(error);
                super.BAD_REQUEST(response);
            }
            super.OK(response, categories);
        });
    }

    getAll(request, response) {
        ExpenseCategory.find({}, (error, categories) => {
            if (error) {
                Logger.log(error);
                super.BAD_REQUEST(response);
            }
            super.OK(response, categories);
        });
    }

    update(request, response) {
        const categoryId = request.params.categoryId;
        ExpenseCategory.findById(categoryId, (error, persisted) => {
            if (error) {
                Logger.log(error);
                super.BAD_REQUEST(response);
            }

            if (!persisted) {
                Logger.log('Expense category not found.');
                super.BAD_REQUEST(response);
            }
            const model = new ExpenseCategory(request.body);
            this.updateInternal(model, persisted, response);
        });
    }

    updateInternal(model, persisted, response) {
        const persistedModel = persisted;
        persistedModel.name = model.name;
        persistedModel.save((errorWhileUpdating) => {
            if (errorWhileUpdating) {
                Logger.log(errorWhileUpdating);
                return super.BAD_REQUEST(response);
            }
            return super.OK(response, persistedModel);
        });
    }

    delete(request, response) {
        const criteria = { _id: request.params.categoryId };
        ExpenseCategory.deleteOne(criteria, (error) => {
            if (error) {
                Logger.log(error);
                super.BAD_REQUEST(response);
            }
            super.OK(response);
        });
    }
}
