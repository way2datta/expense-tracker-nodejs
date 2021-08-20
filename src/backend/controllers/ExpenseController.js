import BaseController from './BaseController';
import ExpenseService from "./../services/ExpenseService";

export default class ExpenseController extends BaseController {
    constructor(service = new ExpenseService()) {
        super();
        this.service = service;
    }

    create = async (request, response) => {
        const created = this.service.create(request.body)
        return super.CREATED(response, created)
    }

    getById = async (request, response) => {
        const existing = await this.service.getById(request.params.expenseId)

        if (existing) return super.OK(response, category);

        return super.BAD_REQUEST(response);
    }

    getAll = async (request, response) => {
        const categories = await this.service.getAll()
        return super.OK(response, categories);
    }

    getPaginated = async (request, response) => {
        const paginated = await this.service.getPaginated(request)
        return super.OK(response, paginated);
    }

    update = async (request, response) => {
        const updated = this.service.update(request.params.expenseId, request.body)
        return super.OK(response, updated);
    }

    getCount = async (request, response) => {
        const count = await this.service.getCount(request)
        return super.OK(response, count);
    }

    delete = async (request, response) => {
        await this.service.delete(request.params.expenseId)
        super.OK(response);
    }
}
