import BaseController from './BaseController';
import ExpenseCategoryService from './../services/ExpenseCategoryService';

export default class ExpenseCategoryController extends BaseController {
    constructor(service = new ExpenseCategoryService()) {
        super();
        this.service = service;
    }

    create = async (request, response) => {
        const newCategory = await this.service.create(request.body)
        return super.CREATED(response, newCategory);
    }

    getById = async (request, response) => {
        const existing = await this.service.getById(request.params.categoryId)
        existing ? super.OK(response, existing) : super.BAD_REQUEST(response)
    }

    getAll = async (request, response) => {
        const categories = await this.service.getAll();
        return super.OK(response, categories);
    }

    getPaginated = async (request, response) => {
        const paginated = await this.service.getPaginated(request);
        super.OK(response, paginated);
    }

    getCount = async (request, response) => {
        const categoriesCount = await this.service.getCount(request)
        super.OK(response, categoriesCount);
    }

    update = async (request, response) => {
        const updated = await this.service.update(request.params.categoryId, request.body)
        super.OK(response, updated);
    }

    delete = async (request, response) => {
        await this.service.delete(request.params.categoryId)
        super.OK(response);
    }
}


