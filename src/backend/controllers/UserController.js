import BaseController from "./BaseController";
import UserService from './../services/UserService';
var _ = require('lodash');

export default class UserController extends BaseController{
    constructor(props) {
        super(props);
        this.service = new UserService();
        _.bindAll(this, ['register', 'update', 'getAll', 'getById', 'delete']);
    }

    register(request, response, next) {
        this.service.create(request.body)
            .then((user) => super.OK(response, user))
            .catch(err => next(err));
    }
    
    getById(request, response,next) {
        this.service.getById(request.params.userId)
            .then(category => category ? super.OK(response, category) : super.BAD_REQUEST(response))
            .catch(error => next(error));
    }

    getAll(request, response, next) {
        this.service.getAll()
            .then(category => super.OK(response, category))
            .catch(error => next(error));
    }

    update(request, response, next) {
        this.service.update(request.params.userId, request.body)
            .then((category) => super.OK(response, category))
            .catch(error => next(error));
    }

    delete(request, response, next) {
        this.service.delete(request.params.userId)
            .then(() => super.OK(response))
            .catch(error => next(error));
    }
}
