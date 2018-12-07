import BaseController from './BaseController';
import ExpenseCategoryService from './../services/ExpenseCategoryService';
var _ = require('lodash');

export default class ExpenseCategoryController extends BaseController{
    constructor(props) {
        super(props);
        this.service = new ExpenseCategoryService();
        _.bindAll(this, ['create', 'update', 'getAll', 'getById', 'delete']);
    }

    create(request, response, next) {
        this.service.create(request.body)
            .then((category) => super.CREATED(response, category))
            .catch(error => next(error));
    }

    getById(request, response,next) {
        this.service.getById(request.params.categoryId)
            .then(category => category ? super.OK(response, category) : super.BAD_REQUEST(response))
            .catch(error => next(error));
    }

    getAll(request, response, next) {
        this.service.getAll()
            .then(category => super.OK(response, category))
            .catch(error => next(error));
    }

    update(request, response, next) {
        this.service.update(request.params.categoryId, request.body)
            .then((category) => super.OK(response, category))
            .catch(err => next(err));
    }

    delete(request, response, next) {
        this.service.delete(request.params.categoryId)
            .then(() => super.OK(response))
            .catch(error => next(error));
    }
}

    
